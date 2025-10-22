'use client';

import { useState, useEffect } from 'react';
import { figmaService, FigmaNode, FigmaFile } from '@/lib/figma-service';

export function useFigmaFile() {
  const [file, setFile] = useState<FigmaFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        setLoading(true);
        const fileData = await figmaService.getFile();
        setFile(fileData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Figma file');
      } finally {
        setLoading(false);
      }
    };

    fetchFile();
  }, []);

  return { file, loading, error };
}

export function useFigmaNode(nodeId: string) {
  const [node, setNode] = useState<FigmaNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!nodeId) return;

    const fetchNode = async () => {
      try {
        setLoading(true);
        const nodes = await figmaService.getFileNodes([nodeId]);
        setNode(nodes[nodeId] || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Figma node');
      } finally {
        setLoading(false);
      }
    };

    fetchNode();
  }, [nodeId]);

  return { node, loading, error };
}

export function useFigmaImage(nodeId: string, format: 'jpg' | 'png' | 'svg' | 'pdf' = 'png') {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!nodeId) return;

    const fetchImage = async () => {
      try {
        setLoading(true);
        const images = await figmaService.getImages([nodeId], format);
        setImageUrl(images[nodeId] || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Figma image');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [nodeId, format]);

  return { imageUrl, loading, error };
}

export function useFigmaColors(nodeId: string) {
  const [colors, setColors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!nodeId) return;

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

  return { colors, loading, error };
}