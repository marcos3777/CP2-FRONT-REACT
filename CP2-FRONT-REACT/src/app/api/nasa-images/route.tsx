// app/api/nasa-images/route.tsx
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Substitua 'DEMO_KEY' pela sua chave de API da NASA
    const nasaApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5';
    const res = await fetch(nasaApiUrl);
    
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from NASA API' }, { status: res.status });
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from NASA API' }, { status: 500 });
  }
}
