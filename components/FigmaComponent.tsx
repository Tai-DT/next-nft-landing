'use client';

import { useState, useEffect } from 'react';
import { figmaService, FigmaNode } from '@/lib/figma-service';

interface FigmaComponentProps {
  nodeId: string;
  className?: string;
  fallback?: React.ReactNode;
}

export function FigmaComponent({ nodeId, className, fallback }: FigmaComponentProps) {
  const [node, setNode] = useState<FigmaNode | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNode = async () => {
      try {
        setLoading(true);
        const nodes = await figmaService.getFileNodes([nodeId]);
        const nodeData = nodes[nodeId];
        
        if (nodeData) {
          setNode(nodeData);
          
          // Get image for the node
          const images = await figmaService.getImages([nodeId], 'png');
          if (images[nodeId]) {
            setImageUrl(images[nodeId]);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Figma node');
      } finally {
        setLoading(false);
      }
    };

    fetchNode();
  }, [nodeId]);

  if (loading) {
    return (
      <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
        {fallback || <div className="h-32 w-full" />}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded ${className}`}>
        Error: {error}
      </div>
    );
  }

  if (!node) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={className}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={node.name}
          className="w-full h-auto"
          style={{
            width: node.absoluteBoundingBox?.width,
            height: node.absoluteBoundingBox?.height,
          }}
        />
      ) : (
        <div
          className="border border-gray-300 rounded"
          style={{
            width: node.absoluteBoundingBox?.width,
            height: node.absoluteBoundingBox?.height,
          }}
        >
          <div className="p-4 text-center text-gray-500">
            {node.name}
          </div>
        </div>
      )}
    </div>
  );
}