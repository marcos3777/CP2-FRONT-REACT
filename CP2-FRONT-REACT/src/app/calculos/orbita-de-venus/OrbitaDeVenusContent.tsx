// src/app/calculos/orbita-de-venus/OrbitaDeVenusContent.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import OrbitaCalculator from './OrbitaCalculator';

interface NasaImage {
  url: string;
  title: string;
}

export default function OrbitaDeVenusContent() {
  const [nasaImage, setNasaImage] = useState<NasaImage | null>(null);

  useEffect(() => {
    
    fetch('/api/nasa-images')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setNasaImage(data[0]); 
        }
      })
      .catch((error) => {
        console.error('Failed to fetch NASA image:', error);
      });
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cálculo da Órbita de Vênus</h1>
      <p className="mb-6 text-lg leading-relaxed">
        Este cálculo hipotético explora a variação da velocidade orbital de Vênus se ela tivesse sido ejetada de
        Júpiter, conforme proposto por Immanuel Velikovsky.
      </p>
      <OrbitaCalculator />
      <div className="mt-8">
        {nasaImage ? (
          <Image
            src={nasaImage.url}
            alt={nasaImage.title || 'Imagem da NASA'}
            width={600}
            height={600}
            className="rounded-lg shadow-md"
          />
        ) : (
          <p>Carregando imagem da NASA...</p>
        )}
      </div>
    </main>
  );
}
