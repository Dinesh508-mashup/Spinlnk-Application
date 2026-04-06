import React from 'react';

const checkItems = [
  'Know exactly when a machine is free — from your room',
  'Smart reminders before, at completion & if clothes are left',
  'Dignified "I moved your clothes" notifications — no conflict',
  'Rain alerts so outdoor laundry is never ruined',
];

const AboutSection: React.FC = () => {

  return (
    <section id="about" style={{ background: '#fff', overflow: 'hidden' }}>
      {/* Image area with decorative elements */}
      <div style={{ position: 'relative', maxWidth: 950, margin: '0 auto', padding: '80px 40px 50px' }}>
        <div style={{
          width: '100%', margin: '0 auto',
          borderRadius: '200px / 160px', overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)', position: 'relative', zIndex: 1
        }}>
          <video
            src="/videos/spinlnk-hostel-demo.webm"
            autoPlay
            loop
            muted
            playsInline
            className="about-image"
            style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      {/* Heading */}
      <div className="about-heading" style={{ background: '#fff', padding: '44px 40px', textAlign: 'center' }}>
        <div style={{
          fontFamily: "'General Sans', sans-serif", fontSize: 11, letterSpacing: 3,
          textTransform: 'uppercase', color: 'var(--teal)', fontWeight: 700, marginBottom: 10
        }}>/ About Me</div>
        <h2 style={{
          fontFamily: "'Satoshi', sans-serif", fontWeight: 700,
          fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15, color: 'var(--blue)', margin: 0
        }}>
          Why choose <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>SpinLnk?</span>
        </h2>
      </div>

      {/* Description + Check items + CTA */}
      <div className="about-content" style={{ background: '#fff', textAlign: 'center', padding: '40px 40px 60px' }}>
        <p style={{
          fontSize: 16, color: '#556', lineHeight: 1.8,
          maxWidth: 640, margin: '0 auto 32px', fontWeight: 400
        }}>
          Every hostel has the same problem — shared machines, forgotten clothes, silent conflict. We built a lightweight web app that brings real coordination to laundry rooms across India. No installs. No drama. Just scan and go.
        </p>
        <div className="about-checks" style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 40px',
          maxWidth: 700, margin: '0 auto 36px', textAlign: 'left'
        }}>
          {checkItems.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14,
              fontSize: 14, color: '#556', lineHeight: 1.7
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', background: 'var(--teal)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1
              }}>✓</span>
              {item}
            </div>
          ))}
        </div>
        <div className="about-buttons" style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <a href="#features" className="btn-outline">See How It Works →</a>
          <a
            href="https://forms.gle/1XdS5iLRrxxMgvGJ7"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '12px 30px', background: 'var(--teal)', color: '#fff',
              border: 'none', borderRadius: 4, fontFamily: "'General Sans', sans-serif",
              fontWeight: 700, fontSize: 13, letterSpacing: .5, cursor: 'pointer',
              transition: 'background .25s', textDecoration: 'none', display: 'inline-block'
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
