// src/app/[slug]/page.tsx
"use client"; 
import { useParams } from 'next/navigation';

export default function SlugPage() {
  const params = useParams();
  const slug = params?.slug;


  let content;
  switch (slug) {
    case 'colisoes-cosmicas':
      content = (
        <>
          <h1>Colisões Cósmicas</h1>
          <p>Conteúdo específico para "Colisões Cósmicas" vai aqui.</p>
        </>
      );
      break;
    case 'memoria-coletiva':
      content = (
        <>
          <h1>Memória Coletiva</h1>
          <p>Conteúdo específico para "Memória Coletiva" vai aqui.</p>
        </>
      );
      break;
    case 'revisao-historica':
      content = (
        <>
          <h1>Revisão Histórica</h1>
          <p>Conteúdo específico para "Revisão Histórica" vai aqui.</p>
        </>
      );
      break;
    default:
      content = (
        <>
          <h1>Página Não Encontrada</h1>
          <p>Desculpe, não há conteúdo disponível para: {slug}</p>
        </>
      );
  }

  return (
    <main className="container-principal">
      {content}
    </main>
  );
}
