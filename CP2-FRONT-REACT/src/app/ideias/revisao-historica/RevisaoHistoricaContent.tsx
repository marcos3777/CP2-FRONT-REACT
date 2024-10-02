// src/app/ideias/revisao-historica/RevisaoHistoricaContent.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NasaImage {
  url: string;
  title: string;
}

export default function RevisaoHistoricaContent() {
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
      <h1>Revisão Histórica</h1>
      <p>
        Immanuel Velikovsky foi um autor que propôs teorias revolucionárias e controversas sobre a história da Terra e
        do sistema solar. Suas ideias desafiavam as convenções científicas de sua época, argumentando que eventos
        cataclísmicos de origem cósmica, como colisões e interações planetárias, moldaram significativamente a história
        humana e geológica.
      </p>
      <p>
        Em 1950, Velikovsky publicou o livro "Worlds in Collision", onde apresentou suas hipóteses de que Vênus e Marte
        tiveram encontros próximos com a Terra, resultando em eventos cataclísmicos. Suas teorias encontraram grande
        resistência da comunidade científica, sendo rejeitadas por astrônomos e historiadores devido à falta de
        evidências substanciais.
      </p>