// app/api/now-playing/route.ts
import { NextResponse } from 'next/server';

const LASTFM_USERNAME = 'seantrg'; // Replace this
const API_KEY = '353376c2e5b54458820bdf63ece2a289';          // Replace this

export async function GET() {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${API_KEY}&format=json&limit=1`
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch from Last.fm' }, { status: 500 });
    }

    const data = await res.json();
    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      return NextResponse.json({ error: 'No track found' }, { status: 404 });
    }

    return NextResponse.json({
      artist: track.artist['#text'],
      name: track.name,
      album: track.album['#text'],
      image: track.image?.[2]?.['#text'] || '',
      url: track.url,
      nowPlaying: track['@attr']?.nowplaying === 'true',
    });
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error', details: err }, { status: 500 });
  }
}


