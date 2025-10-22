import { figmaConfig, figmaHeaders } from './figma-config';

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fills?: Array<{
    type: string;
    color?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    gradientStops?: Array<{
      color: {
        r: number;
        g: number;
        b: number;
        a: number;
      };
      position: number;
    }>;
  }>;
  characters?: string;
  style?: {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    textAlignHorizontal?: string;
    textAlignVertical?: string;
  };
}

export interface FigmaFile {
  document: FigmaNode;
  components: Record<string, any>;
  styles: Record<string, any>;
}

export class FigmaService {
  private accessToken: string;
  private fileKey: string;

  constructor() {
    this.accessToken = figmaConfig.accessToken;
    this.fileKey = figmaConfig.fileKey;
  }

  private isClient() {
    return typeof window !== 'undefined';
  }

  // Internal helper to call the server-side proxy when in browser
  private async proxyFetch(path: string) {
    const resp = await fetch(`/api/figma${path}`);
    if (!resp.ok) {
      throw new Error(`Proxy Figma error: ${resp.status} ${resp.statusText}`);
    }
    return resp.json();
  }

  async getFile(): Promise<FigmaFile> {
    if (this.isClient()) {
      return this.proxyFetch('/file');
    }

    if (!this.accessToken || !this.fileKey) {
      throw new Error('Figma access token or file key not configured');
    }

    const response = await fetch(
      `${figmaConfig.baseUrl}/files/${this.fileKey}`,
      {
        headers: figmaHeaders,
      }
    );

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async getFileNodes(nodeIds: string[]): Promise<Record<string, FigmaNode>> {
    if (this.isClient()) {
      return this.proxyFetch(`/nodes?ids=${encodeURIComponent(nodeIds.join(','))}`);
    }

    if (!this.accessToken || !this.fileKey) {
      throw new Error('Figma access token or file key not configured');
    }

    const response = await fetch(
      `${figmaConfig.baseUrl}/files/${this.fileKey}/nodes?ids=${nodeIds.join(',')}`,
      {
        headers: figmaHeaders,
      }
    );

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.nodes;
  }

  async getImages(nodeIds: string[], format: 'jpg' | 'png' | 'svg' | 'pdf' = 'png'): Promise<Record<string, string>> {
    if (this.isClient()) {
      return this.proxyFetch(`/images?ids=${encodeURIComponent(nodeIds.join(','))}&format=${format}`);
    }

    if (!this.accessToken || !this.fileKey) {
      throw new Error('Figma access token or file key not configured');
    }

    const response = await fetch(
      `${figmaConfig.baseUrl}/images/${this.fileKey}?ids=${nodeIds.join(',')}&format=${format}`,
      {
        headers: figmaHeaders,
      }
    );

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.images;
  }

  // Helper method to find nodes by name
  findNodesByName(node: FigmaNode, name: string): FigmaNode[] {
    const results: FigmaNode[] = [];
    
    if (node.name.toLowerCase().includes(name.toLowerCase())) {
      results.push(node);
    }
    
    if (node.children) {
      for (const child of node.children) {
        results.push(...this.findNodesByName(child, name));
      }
    }
    
    return results;
  }

  // Helper method to extract colors from fills
  extractColors(node: FigmaNode): string[] {
    const colors: string[] = [];
    
    if (node.fills) {
      for (const fill of node.fills) {
        if (fill.type === 'SOLID' && fill.color) {
          const { r, g, b, a } = fill.color;
          const hex = this.rgbaToHex(r, g, b, a);
          colors.push(hex);
        }
      }
    }
    
    return colors;
  }

  private rgbaToHex(r: number, g: number, b: number, a: number): string {
    const toHex = (n: number) => {
      const hex = Math.round(n * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    return a < 1 ? `${hex}${Math.round(a * 255).toString(16).padStart(2, '0')}` : hex;
  }
}

export const figmaService = new FigmaService();