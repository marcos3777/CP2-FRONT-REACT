// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        {}
        <header className="header">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Explorando Velikovsky</h1>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/ideias/colisoes-cosmicas" className="hover:underline">
                  Colisões Cósmicas
                </Link>
              </li>
              <li>
                <Link href="/ideias/memoria-coletiva" className="hover:underline">
                  Memória Coletiva
                </Link>
              </li>
              <li>
                <Link href="/ideias/revisao-historica" className="hover:underline">
                  Revisão Histórica
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Conteúdo Principal */}
        <main className="container-principal flex-grow">{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="container mx-auto">
            <p>&copy; 2024 Explorando Velikovsky. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
