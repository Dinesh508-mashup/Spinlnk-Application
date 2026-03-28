import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ background: '#000', padding: '40px 40px 0', fontFamily: "'DM Sans', sans-serif", overflow: 'hidden' }}>
    <div className="footer-row" style={{
      border: '1px solid rgba(160,100,240,0.25)', borderRadius: 16,
      padding: '18px 36px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', marginBottom: 16
    }}>
      {[
        { icon: '📞', href: 'tel:+917075194320', text: '+91 7075194320' },
        { icon: '✉️', href: 'mailto:dineshmaganti4@gmail.com', text: 'dineshmaganti4@gmail.com' },
        { icon: '📍', href: null, text: 'Kondapur, Hyderabad — 500084' },
      ].map((item, i) => (
        <p key={i} style={{ color: '#b07aed', fontSize: 13, fontWeight: 500 }}>
          {item.icon}{' '}
          {item.href
            ? <a href={item.href} style={{ color: '#b07aed', textDecoration: 'none' }}>{item.text}</a>
            : item.text
          }
        </p>
      ))}
    </div>

    <div className="footer-row" style={{
      border: '1px solid rgba(160,100,240,0.25)', borderRadius: 16,
      padding: '18px 36px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', marginBottom: 16
    }}>
      <p style={{ color: '#b07aed', fontSize: 13, fontWeight: 500 }}>
        © 2025 Spinlnk — Laundry intelligence for hostels. Made with ❤️ in Hyderabad.
      </p>
      <div className="footer-socials" style={{ display: 'flex', gap: 10 }}>
        {['in', '𝕏', 'ig'].map((s, i) => (
          <a
            key={i}
            href="#"
            style={{
              width: 34, height: 34, borderRadius: 8, border: '1px solid rgba(160,100,240,0.35)',
              color: '#b07aed', textDecoration: 'none', fontSize: 12, fontWeight: 600,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s, color 0.2s'
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(192,132,252,0.7)'; (e.currentTarget as HTMLAnchorElement).style.color = '#c084fc'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(160,100,240,0.35)'; (e.currentTarget as HTMLAnchorElement).style.color = '#b07aed'; }}
          >
            {s}
          </a>
        ))}
      </div>
    </div>

    <div className="footer-big-text" style={{
      textAlign: 'center', lineHeight: 0.85, pointerEvents: 'none', userSelect: 'none',
      fontFamily: "'Syne', sans-serif", fontWeight: 800,
      fontSize: 'clamp(80px, 16vw, 180px)',
      background: 'linear-gradient(180deg, #c084fc 0%, #7c3aed 50%, #3b0764 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
    }}>
      SpinLnk
    </div>
  </footer>
);

export default Footer;
