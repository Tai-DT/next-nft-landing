'use client';

import { useState, useEffect } from 'react';
import { figmaService, FigmaNode } from '@/lib/figma-service';

interface FigmaTextProps {
  nodeId: string;
  className?: string;
  fallback?: string;
}

export function FigmaText({ nodeId, className, fallback }: FigmaTextProps) {
  const [text, setText] = useState<string>('');
  const [style, setStyle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchText = async () => {
      try {
        setLoading(true);
        const nodes = await figmaService.getFileNodes([nodeId]);
        const nodeData = nodes[nodeId];
        
        if (nodeData && nodeData.characters) {
          setText(nodeData.characters);
          setStyle(nodeData.style);
        } else {
          setText(fallback || '');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Figma text');
        setText(fallback || '');
      } finally {
        setLoading(false);
      }
    };

    fetchText();
  }, [nodeId, fallback]);

  if (loading) {
    return (
      <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
        <div className="h-6 w-32" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-red-600 ${className}`}>
        {text || fallback || 'Error loading text'}
      </div>
    );
  }

  const textStyle = {
    fontFamily: style?.fontFamily || 'inherit',
    fontSize: style?.fontSize ? `${style.fontSize}px` : 'inherit',
    fontWeight: style?.fontWeight || 'inherit',
    textAlign: style?.textAlignHorizontal?.toLowerCase() || 'inherit',
    verticalAlign: style?.textAlignVertical?.toLowerCase() || 'inherit',
  };

  return (
    <span className={className} style={textStyle}>
      {text || fallback || ''}
    </span>
  );
}