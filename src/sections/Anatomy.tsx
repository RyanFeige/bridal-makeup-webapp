import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeritageHelix from '../effects/HeritageHelix';
import { anatomyConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Anatomy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pillars = anatomyConfig.pillars;

  useEffect(() => {
    const ctx = gsap.context(() => {
      pillarRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 75%',
              end: 'top 40%',
              scrub: false,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!anatomyConfig.sectionLabel && !anatomyConfig.title && pillars.length === 0) {
    return null;
  }

  return (
    <section
      id="anatomy"
      ref={sectionRef}
      style={{
        backgroundColor: '#f0ecd7',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Header */}
      <div
        style={{
          textAlign: 'center',
          padding: '100px 24px 40px',
        }}
      >
        {anatomyConfig.sectionLabel && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#938977',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {anatomyConfig.sectionLabel}
          </p>
        )}
        {anatomyConfig.title && (
          <h2
            className="mx-auto max-w-[20ch] text-balance px-2"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(1.75rem, 5vw, 2.625rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              color: '#180c04',
            }}
          >
            {anatomyConfig.title}
          </h2>
        )}
      </div>

      {/* Split Layout */}
      <div
        className="flex min-h-0 flex-col md:min-h-screen md:flex-row"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Left: Sticky HeritageHelix */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="hidden md:flex md:w-1/2"
        >
          <div className="h-[min(80vh,600px)] w-full md:h-[80vh]" style={{ minHeight: 0 }}>
            <HeritageHelix />
          </div>
        </div>

        {/* Right: Scrolling Content */}
        <div className="w-full px-5 pb-8 pt-6 sm:px-8 md:w-1/2 md:px-10 md:pb-0 md:pt-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              ref={(el) => { pillarRefs.current[i] = el; }}
              className="py-[clamp(4rem,10vh,8rem)] first:pt-0 md:first:pt-[15vh]"
              style={{
                borderBottom: i < pillars.length - 1 ? '1px solid rgba(24, 12, 4, 0.1)' : 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#938977',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                {pillar.label}
              </p>
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '26px',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#180c04',
                  marginBottom: '20px',
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#696969',
                  maxWidth: '480px',
                }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
