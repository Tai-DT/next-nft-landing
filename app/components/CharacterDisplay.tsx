'use client';

import Image from 'next/image';

interface CharacterLayer {
  name: string;
  path: string;
  order: number;
}

export default function CharacterDisplay() {
  const layers: CharacterLayer[] = [
    { name: 'background', path: '/character-layers/img-background.png', order: 0 },
    { name: 'fur', path: '/character-layers/fur-default.png', order: 1 },
    { name: 'clothes', path: '/character-layers/clothes-red-tee.png', order: 2 },
    { name: 'eyes', path: '/character-layers/eyes-1.png', order: 3 },
    { name: 'mouth', path: '/character-layers/mouth-open-3.png', order: 4 },
    { name: 'hat', path: '/character-layers/hat-cap-ufo.png', order: 5 },
    { name: 'overlay', path: '/character-layers/img-overlay.png', order: 6 },
  ];

  const sortedLayers = [...layers].sort((a, b) => a.order - b.order);

  return (
    <div className="relative w-full h-auto flex items-center justify-center">
      {/* Character Container */}
      <div className="relative w-[400px] h-[500px]">
        {sortedLayers.map((layer) => (
          <div
            key={layer.name}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={layer.path}
              alt={layer.name}
              width={400}
              height={500}
              priority={layer.order === 0}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
