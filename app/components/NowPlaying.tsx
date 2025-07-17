'use client';

import { useEffect, useState } from 'react';

type Track = {
  artist: string;
  name: string;
  album: string;
  image: string;
  url: string;
  nowPlaying: boolean;
};

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    fetch('/api/nowplaying')
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setTrack(data);
      })
      .catch(() => {});
  }, []);

  if (!track) return <p>Loading current track...</p>;

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: '#ffffff22',
        borderRadius: '10px',
        padding: '1rem',
        textDecoration: 'none',
        color: 'white',
      }}
    >
      <img src={track.image} alt={track.name} style={{ width: 64, height: 64, borderRadius: '4px' }} />
      <div>
        <strong>{track.name}</strong>
        <br />
        <span>{track.artist}</span>
        {track.nowPlaying && <span style={{ fontStyle: 'italic' }}> (now playing)</span>}
      </div>
    </a>
  );
}
