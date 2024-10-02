// src/app/ideias/memoria-coletiva/MemoriaColetivaContent.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface NasaImage {
  url: string;
  title: string;
}

export default function MemoriaColetivaContent() {
  const [nasaImages, setNasaImages] = useState<NasaImage[]>([]);

  useEffect(() => {
    fetch("/api/nasa-images")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNasaImages(data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch NASA images:", error);
      });
  }, []);
  return (
    <main className="container-principal">
      <h1>Memória Coletiva</h1>
      <p>
        Immanuel Velikovsky propôs que mitos, lendas e escrituras antigas de
        diferentes culturas ao redor do mundo são registros de eventos
        catastróficos reais que ocorreram na história da Terra. Ele argumenta
        que essas narrativas compartilhadas são evidências de uma memória
        coletiva da humanidade, preservando o relato de catástrofes cósmicas
        causadas por interações próximas com outros corpos celestes.
      </p>
      <p>
        De acordo com Velikovsky, muitos mitos descrevem fenômenos semelhantes,
        como inundações, incêndios celestiais e escuridão prolongada, que seriam
        interpretações de eventos astronômicos reais observados por diferentes
        civilizações. Essa teoria sugere que a memória coletiva humana mantém,
        através de tradições orais e escritas, registros de acontecimentos que
        impactaram profundamente a história e a evolução das sociedades.
      </p>
      <p>
        A ideia de memória coletiva desafia a visão convencional de que mitos
        são puramente simbólicos ou fictícios, propondo que eles contêm verdades
        históricas ocultas. Velikovsky incentivou uma reavaliação dos textos
        antigos sob essa perspectiva, buscando correlacionar relatos mitológicos
        com eventos astronômicos e geológicos.
      </p>
      <div className="mt-6">
        <h2>Imagens da NASA</h2>
        <div className="grid-imagens">
          {nasaImages.length > 0 ? (
            nasaImages.map((image, index) => (
              <div key={index} className="imagem-principal">
                <Image
                  src={image.url}
                  alt={image.title || "Imagem da NASA"}
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
