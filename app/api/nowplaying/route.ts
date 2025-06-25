import { NextResponse } from 'next/server';

const LASTFM_USERNAME = 'your_username';
const API_KEY = 'your_api_key';

export async function GET() {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${seantrg}&api_key=${353376c2e5b54458820bdf63ece2a289}&format=json&limit=1`
  );
  const data = await res.json();

  const track = data?.recenttracks?.track?.[0];

  if (!track) {
    return NextResponse.json({ error: 'No track found' });
  }

  return NextResponse.json({
    artist: track.artist['#text'],
    name: track.name,
    album: track.album['#text'],
    image: track.image?.[2]?.['#text'], // medium size
    url: track.url,
    nowPlaying: track['@attr']?.nowplaying === 'true',
  });
}
