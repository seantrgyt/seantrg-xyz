import React from 'react';Add commentMore actions

const SeanTRGPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#080808', color: '#FFFFFF', fontFamily: 'Satoshi, sans-serif' }}>
      {/* Background Image */}
      <div style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: -1
      }} />

      {/* Audio Player */}
      <audio src="https://r2.guns.lol/6857a187-b134-41ad-a597-57ba1d7fb05a.mp3" loop autoPlay />

      {/* Main Card */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 600, fontSize: '39.5px', margin: '1rem 0 0.5rem' }}>Projects</h1>

        {/* Social Links */}
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://youtube.com/@seantrg" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://bsky.app/profile/seantrg.bsky.social" target="_blank" rel="noopener noreferrer">Bluesky</a>
          <a href="https://x.com/SeanTRG" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://twitch.tv/seantrglive" target="_blank" rel="noopener noreferrer">Twitch</a>
          <a href="https://steamcommunity.com/id/seantrg" target="_blank" rel="noopener noreferrer">Steam</a>
          <a href="https://roblox.com/users/1095648854/profile" target="_blank" rel="noopener noreferrer">Roblox</a>
          <a href="https://instagram.com/itsseantrg" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com/@itsseantrg" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>

      {/* NOTE: External script effects like cursor-effects.js, Cloudflare turnstile, and Web Workers should be implemented via useEffect or useScript hook if needed. */}
    </div>
  );
};
