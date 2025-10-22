'use client';

import { useState, useEffect } from 'react';
import { FigmaComponent } from '@/components/FigmaComponent';
import { FigmaText } from '@/components/FigmaText';
import { FigmaColorPalette } from '@/components/FigmaColorPalette';
import { useFigmaFile, useFigmaColors } from '@/hooks/useFigma';
import { figmaTokenService } from '@/lib/figma-tokens';

export default function FigmaPage() {
  const { file, loading, error } = useFigmaFile();
  const [tokens, setTokens] = useState<any>(null);
  const [nodeId, setNodeId] = useState('');

  useEffect(() => {
    const loadTokens = async () => {
      try {
        const extractedTokens = await figmaTokenService.extractTokensFromFile();
        setTokens(extractedTokens);
      } catch (err) {
        console.error('Error loading tokens:', err);
      }
    };

    if (file) {
      loadTokens();
    }
  }, [file]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Figma file...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <h2 className="text-xl font-bold mb-2">Error Loading Figma</h2>
            <p>{error}</p>
            <p className="mt-2 text-sm">
              Make sure you have configured your Figma access token and file key in .env.local
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Figma Integration</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* File Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">File Information</h2>
            {file && (
              <div className="space-y-2">
                <p><strong>Name:</strong> {file.document.name}</p>
                <p><strong>Type:</strong> {file.document.type}</p>
                <p><strong>Components:</strong> {Object.keys(file.components).length}</p>
                <p><strong>Styles:</strong> {Object.keys(file.styles).length}</p>
              </div>
            )}
          </div>

          {/* Node ID Input */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Test Components</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Node ID
                </label>
                <input
                  type="text"
                  value={nodeId}
                  onChange={(e) => setNodeId(e.target.value)}
                  placeholder="Enter Figma node ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {nodeId && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Component</h3>
                    <FigmaComponent nodeId={nodeId} className="border rounded p-4" />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Text</h3>
                    <FigmaText nodeId={nodeId} className="text-gray-700" />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Colors</h3>
                    <FigmaColorPalette nodeId={nodeId} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Design Tokens */}
        {tokens && (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Design Tokens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-medium mb-2">Colors</h3>
                <div className="space-y-1">
                  {Object.entries(tokens.colors).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <div
                        className="w-4 h-4 rounded border"
                        style={{ backgroundColor: value as string }}
                      />
                      <span className="text-sm font-mono">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Typography</h3>
                <div className="space-y-1">
                  {Object.entries(tokens.typography).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <span className="font-mono">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}