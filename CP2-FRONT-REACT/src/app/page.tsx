// app/page.tsx
export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Worlds in Collision</h1>
      <p className="mb-6">
        Bem-vindo ao nosso site explorando as ideias de Immanuel Velikovsky. Navegue pelas seções abaixo para saber mais.
      </p>
      <ul className="space-y-4">
        <li>
          <a href="/ideias/colisoes-cosmicas" className="text-blue-500 hover:underline">
            Colisões Cósmicas
          </a>
        </li>
        <li>
          <a href="/ideias/revisao-historica" className="text-blue-500 hover:underline">
            Revisão Histórica
          </a>
        </li>
        <li>
          <a href="/ideias/memoria-coletiva" className="text-blue-500 hover:underline">
            Memória Coletiva
          </a>
        </li>
        <li>
          <a href="/calculos/orbita-de-venus" className="text-blue-500 hover:underline">
            Cálculo da Órbita de Vênus
          </a>
        </li>
      </ul>
    </main>
  );
}
