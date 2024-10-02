// src/app/ideias/colisoes-cosmicas/ColisoesCosmicasContent.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NasaImage {
  url: string;
  title: string;
}

export default function ColisoesCosmicasContent() {
  const [nasaImages, setNasaImages] = useState<NasaImage[]>([]);

  useEffect(() => {
    // Faz uma chamada para o endpoint da API que criamos
    fetch('/api/nasa-images')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNasaImages(data); // Define as imagens retornadas pela API
        }
      })
      .catch((error) => {
        console.error('Failed to fetch NASA images:', error);
      });
  }, []);

  return (
    <main className="container-principal">
      <h1>Colisões Cósmicas</h1>
      <p>
        Immanuel Velikovsky propôs que eventos catastróficos na história da Terra foram causados por interações
        próximas com outros corpos celestes, particularmente Vênus e Marte. Sua teoria sugere que Vênus foi ejetado
        de Júpiter como um cometa e teve encontros próximos com a Terra, causando uma série de catástrofes naturais
        registradas em mitos e escrituras antigas.
      </p>
      <p>
        De acordo com Velikovsky, essas interações explicam eventos como o Êxodo bíblico, onde fenômenos como pragas
        e a divisão do Mar Vermelho seriam consequências dessas forças cósmicas. Ele argumenta que memórias coletivas
        dessas catástrofes foram preservadas em lendas e mitologias ao redor do mundo.
      </p>
      <p>
        Embora suas ideias tenham sido altamente controversas e rejeitadas pela comunidade científica da época, elas
        desafiaram conceitos estabelecidos em astronomia e história, provocando debates sobre a interpretação de
        registros antigos e a dinâmica do sistema solar.
      </p>
      <div className="mt-6">
        <h2>Imagens da NASA</h2>
        <div className="grid-imagens">
          {nasaImages.length > 0 ? (
            nasaImages.map((image, index) => (
              <div key={index} className="imagem-principal">
                <Image
                  src={image.url}
                  alt={image.title || 'Imagem da NASA'}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
                <p className="text-center mt-2">{image.title}</p>
              </div>
            ))
          ) : (
            <p>Carregando imagens da NASA...</p>
          )}
        </div>
      </div>
    </main>
  );
}
