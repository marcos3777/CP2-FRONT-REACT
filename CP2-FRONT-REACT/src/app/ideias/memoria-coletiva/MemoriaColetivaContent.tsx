// src/app/ideias/memoria-coletiva/MemoriaColetivaContent.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NasaImage {
  url: string;
  title: string;
}

export default function MemoriaColetivaContent() {
  const [nasaImages, setNasaImages] = useState<NasaImage[]>([]);

  useEffect(() => {
    fetch('/api/nasa-images')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNasaImages(data); 
        }
      })
      .catch((error) => {
        console.error('Failed to fetch NASA images:', error);
      });
  }, []);