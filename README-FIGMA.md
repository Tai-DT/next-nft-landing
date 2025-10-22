# Figma Integration Guide

This project now includes full Figma API integration to fetch designs, components, and design tokens directly from Figma.

## Setup

1. **Get Figma Access Token:**
   - Go to Figma → Settings → Account → Personal Access Tokens
   - Generate a new token
   - Copy the token

2. **Get Figma File Key:**
   - Open your Figma file
   - Copy the file ID from the URL: `https://www.figma.com/file/[FILE_KEY]/...`

3. **Configure Environment:**
   - Update `.env.local` with your credentials:
   ```
   FIGMA_ACCESS_TOKEN=your_figma_access_token_here
   FIGMA_FILE_KEY=your_figma_file_key_here
   ```

## Usage

### Components

#### FigmaComponent
Renders any Figma node as an image component:

```tsx
import { FigmaComponent } from '@/components/FigmaComponent';

<FigmaComponent 
  nodeId="1:23" 
  className="w-full h-auto"
  fallback={<div>Loading...</div>}
/>
```

#### FigmaText
Renders text from Figma with preserved styling:

```tsx
import { FigmaText } from '@/components/FigmaText';

<FigmaText 
  nodeId="1:24" 
  className="text-lg font-bold"
  fallback="Default text"
/>
```

#### FigmaColorPalette
Extracts and displays colors from a Figma node:

```tsx
import { FigmaColorPalette } from '@/components/FigmaColorPalette';

<FigmaColorPalette nodeId="1:25" />
```

### Hooks

#### useFigmaFile
Fetches the entire Figma file:

```tsx
import { useFigmaFile } from '@/hooks/useFigma';

const { file, loading, error } = useFigmaFile();
```

#### useFigmaNode
Fetches a specific node:

```tsx
import { useFigmaNode } from '@/hooks/useFigma';

const { node, loading, error } = useFigmaNode('1:23');
```

#### useFigmaImage
Fetches an image of a node:

```tsx
import { useFigmaImage } from '@/hooks/useFigma';

const { imageUrl, loading, error } = useFigmaImage('1:23', 'png');
```

#### useFigmaColors
Extracts colors from a node:

```tsx
import { useFigmaColors } from '@/hooks/useFigma';

const { colors, loading, error } = useFigmaColors('1:23');
```

### Service

#### FigmaService
Direct API access:

```tsx
import { figmaService } from '@/lib/figma-service';

// Get file
const file = await figmaService.getFile();

// Get specific nodes
const nodes = await figmaService.getFileNodes(['1:23', '1:24']);

// Get images
const images = await figmaService.getImages(['1:23'], 'png');

// Find nodes by name
const textNodes = figmaService.findNodesByName(file.document, 'title');

// Extract colors
const colors = figmaService.extractColors(node);
```

## Design Tokens

The system automatically extracts design tokens from your Figma file:

- **Colors**: From fill styles and color styles
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: From component layouts
- **Border Radius**: From component properties

## Testing

Visit `/figma` to test the integration with your Figma file. You can:

- View file information
- Test components with node IDs
- See extracted design tokens
- Preview colors and typography

## API Endpoints

The Figma API integration supports:

- File fetching
- Node-specific data
- Image exports (PNG, JPG, SVG, PDF)
- Style extraction
- Color palette generation

## Error Handling

All components include proper error handling and loading states. Make sure your Figma access token has the necessary permissions to read the file.

## Next Steps

1. Configure your Figma credentials
2. Test the integration at `/figma`
3. Use components in your NFT landing page
4. Extract design tokens for consistent styling
5. Build dynamic components based on Figma designs