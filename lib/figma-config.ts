export const figmaConfig = {
  accessToken: process.env.FIGMA_ACCESS_TOKEN || '',
  fileKey: process.env.FIGMA_FILE_KEY || '',
  baseUrl: 'https://api.figma.com/v1',
};

export const figmaHeaders = {
  'X-Figma-Token': figmaConfig.accessToken,
  'Content-Type': 'application/json',
};