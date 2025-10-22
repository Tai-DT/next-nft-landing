import { figmaService } from './figma-service';

export interface FigmaTokens {
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
}

export class FigmaTokenService {
  private tokens: FigmaTokens = {
    colors: {},
    typography: {},
    spacing: {},
    borderRadius: {},
  };

  async extractTokensFromFile(): Promise<FigmaTokens> {
    try {
      const file = await figmaService.getFile();
      const tokens: FigmaTokens = {
        colors: {},
        typography: {},
        spacing: {},
        borderRadius: {},
      };

      // Extract colors from styles
      if (file.styles) {
        for (const [styleId, style] of Object.entries(file.styles)) {
          if (style.styleType === 'FILL') {
            const styleName = style.name.toLowerCase().replace(/\s+/g, '-');
            // You would need to fetch the actual style data to get colors
            // This is a simplified version
            tokens.colors[styleName] = '#000000'; // Placeholder
          }
        }
      }

      // Extract typography from text nodes
      this.extractTypographyFromNode(file.document, tokens);

      return tokens;
    } catch (error) {
      console.error('Error extracting tokens from Figma:', error);
      return this.tokens;
    }
  }

  private extractTypographyFromNode(node: any, tokens: FigmaTokens) {
    if (node.type === 'TEXT' && node.style) {
      const fontFamily = node.style.fontFamily?.toLowerCase().replace(/\s+/g, '-');
      const fontSize = node.style.fontSize;
      const fontWeight = node.style.fontWeight;

      if (fontFamily && fontSize) {
        const key = `${fontFamily}-${fontSize}`;
        tokens.typography[key] = {
          fontFamily: node.style.fontFamily,
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight || 400,
          lineHeight: node.style.lineHeightPx ? `${node.style.lineHeightPx}px` : 'normal',
        };
      }
    }

    if (node.children) {
      for (const child of node.children) {
        this.extractTypographyFromNode(child, tokens);
      }
    }
  }

  generateTailwindConfig(tokens: FigmaTokens) {
    return {
      theme: {
        extend: {
          colors: tokens.colors,
          fontFamily: this.generateFontFamilyConfig(tokens.typography),
          fontSize: this.generateFontSizeConfig(tokens.typography),
          fontWeight: this.generateFontWeightConfig(tokens.typography),
          lineHeight: this.generateLineHeightConfig(tokens.typography),
        },
      },
    };
  }

  private generateFontFamilyConfig(typography: Record<string, any>) {
    const fontFamilies = new Set<string>();
    
    for (const style of Object.values(typography)) {
      if (style.fontFamily) {
        fontFamilies.add(style.fontFamily);
      }
    }

    return Array.from(fontFamilies).reduce((acc, font) => {
      const key = font.toLowerCase().replace(/\s+/g, '-');
      acc[key] = [font];
      return acc;
    }, {} as Record<string, string[]>);
  }

  private generateFontSizeConfig(typography: Record<string, any>) {
    const fontSizes = new Set<number>();
    
    for (const style of Object.values(typography)) {
      if (style.fontSize) {
        const size = parseInt(style.fontSize.replace('px', ''));
        fontSizes.add(size);
      }
    }

    return Array.from(fontSizes).reduce((acc, size) => {
      acc[size] = [`${size}px`, { lineHeight: '1.2' }];
      return acc;
    }, {} as Record<number, [string, { lineHeight: string }]>);
  }

  private generateFontWeightConfig(typography: Record<string, any>) {
    const weights = new Set<number>();
    
    for (const style of Object.values(typography)) {
      if (style.fontWeight) {
        weights.add(style.fontWeight);
      }
    }

    return Array.from(weights).reduce((acc, weight) => {
      acc[weight] = weight.toString();
      return acc;
    }, {} as Record<number, string>);
  }

  private generateLineHeightConfig(typography: Record<string, any>) {
    const lineHeights = new Set<string>();
    
    for (const style of Object.values(typography)) {
      if (style.lineHeight) {
        lineHeights.add(style.lineHeight);
      }
    }

    return Array.from(lineHeights).reduce((acc, lineHeight) => {
      const key = lineHeight.replace('px', '');
      acc[key] = lineHeight;
      return acc;
    }, {} as Record<string, string>);
  }
}

export const figmaTokenService = new FigmaTokenService();