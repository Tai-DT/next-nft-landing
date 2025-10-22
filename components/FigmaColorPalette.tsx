'use client';

import { useState, useEffect } from 'react';
import { figmaService, FigmaNode } from '@/lib/figma-service';

interface FigmaColorPaletteProps {
  nodeId: string;
  className?: string;
}

export function FigmaColorPalette({ nodeId, className }: FigmaColorPaletteProps) {
  const [colors, setColors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        setLoading(true);
        const nodes = await figmaService.getFileNodes([nodeId]);
        const nodeData = nodes[nodeId];
        
        if (nodeData) {
          const extractedColors = figmaService.extractColors(nodeData);
          setColors(extractedColors);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch colors');
      } finally {
        setLoading(false);
      }
    };

    fetchColors();
  }, [nodeId]);

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-red-600 ${className}`}>
        Error loading colors: {error}
      </div>
    );
  }

  if (colors.length === 0) {
    return (
      <div className={`text-gray-500 ${className}`}>
        No colors found
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {colors.map((color, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className="w-8 h-8 rounded border border-gray-300"
            style={{ backgroundColor: color }}
            title={color}
          />
          <span className="text-xs text-gray-600 mt-1 font-mono">
            {color}
          </span>
        </div>
      ))}
    </div>
  );
}