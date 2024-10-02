// src/app/not-found.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    
    const images = [
      '/image/notfoundimage1.jpg',
      '/image/notfoundimage2.png',
      '/image/notfoundimage3.jpg',
    ];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageSrc(randomImage);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-4 text-red-600">404 - Página Não Encontrada</h1>
      <p className="text-lg mb-6 text-gray-700">
        Desculpe, a página que você está procurando não existe. Pode ter sido movida ou nunca existiu.
      </p>
      {imageSrc && (
        <div className="mb-6">
          <Image
            src={imageSrc}
            alt="Imagem de Página Não Encontrada"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
      <Link href="/" className="text-blue-500 hover:underline text-lg">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
