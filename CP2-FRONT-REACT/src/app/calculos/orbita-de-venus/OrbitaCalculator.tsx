"use client";

import { useState } from 'react';

export default function OrbitaCalculator() {
  const [massaJupiter, setMassaJupiter] = useState(1.898e27); // em kg
  const [distancia, setDistancia] = useState(778.5e9); // em metros
  const [velocidade, setVelocidade] = useState<number | null>(null);
  const [erro, setErro] = useState('');

  const calcularVelocidade = () => {
    if (massaJupiter <= 0 || distancia <= 0) {
      setErro('Por favor, insira valores positivos para massa e distância.');
      setVelocidade(null);
      return;
    }

    setErro('');
    const G = 6.67430e-11; // Constante gravitacional
    const v = Math.sqrt((G * massaJupiter) / distancia);
    setVelocidade(v);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">
        Massa de Júpiter (kg):
        <input
          type="number"
          value={massaJupiter}
          onChange={(e) => setMassaJupiter(parseFloat(e.target.value))}
          className="w-full p-2 border rounded mt-1"
          min="0"
        />
      </label>
      <label className="block mb-2">
        Distância entre Júpiter e o Sol (m):
        <input
          type="number"
          value={distancia}
          onChange={(e) => setDistancia(parseFloat(e.target.value))}
          className="w-full p-2 border rounded mt-1"
          min="0"
        />
      </label>
      {erro && <p className="text-red-500 mt-2">{erro}</p>}
      <button
        onClick={calcularVelocidade}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Calcular Velocidade Orbital
      </button>
      {velocidade !== null && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Resultado:</h2>
          <p className="text-lg mt-2">
            Velocidade orbital hipotética de Vênus: <strong>{velocidade.toFixed(2)} m/s</strong>
          </p>
        </div>
      )}
    </div>
  );
}
