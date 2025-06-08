import React from 'react';

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
          <a href="https://acrevival.seantrg.xyz" target="_blank" rel="noopener noreferrer">AC Revival</a>
        </div>
      </div>

      {/* NOTE: External script effects like cursor-effects.js, Cloudflare turnstile, and Web Workers should be implemented via useEffect or useScript hook if needed. */}
    </div>
  );
};

export default SeanTRGPage;
