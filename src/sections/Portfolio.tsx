import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const portfolioImages = [
  { src: '/images/portfolio-01.jpg', alt: 'Bridal mehndi henna design on hands' },
  { src: '/images/portfolio-02.jpg', alt: 'Elegant bridal makeup with jewelry' },
  { src: '/images/portfolio-03.jpg', alt: 'Intricate bridal mehndi patterns' },
  { src: '/images/portfolio-04.jpg', alt: 'Bridal eye makeup artistry' },
  { src: '/images/portfolio-05.jpg', alt: 'Detailed henna mehndi artwork' },
  { src: '/images/portfolio-06.jpg', alt: 'Bridal mehndi with traditional bangles' },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Grid items stagger animation
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{
        backgroundColor: '#180c04',
        position: 'relative',
        zIndex: 2,
        padding: '100px 0 80px',
      }}
    >
      {/* Section Header */}
      <div
        ref={headingRef}
        style={{
          textAlign: 'center',
          padding: '0 24px 60px',
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
            marginBottom: '20px',
          }}
        >
          Portfolio
        </p>
        <h2
          className="mx-auto max-w-[18ch] text-balance"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(1.75rem, 5vw, 2.625rem)',
            fontWeight: 500,
            lineHeight: 1.2,
            color: '#fcfaee',
          }}
        >
          Our Bridal <em style={{ fontStyle: 'italic' }}>Masterpieces</em>
        </h2>
      </div>

      {/* Image Grid */}
      <div
        ref={gridRef}
        className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-5"
      >
        {portfolioImages.map((image, i) => (
          <div
            key={image.src}
            ref={(el) => { itemRefs.current[i] = el; }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              const overlay = e.currentTarget.querySelector('.overlay');
              if (img) {
                gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
              }
              if (overlay) {
                gsap.to(overlay, { opacity: 1, duration: 0.4 });
              }
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              const overlay = e.currentTarget.querySelector('.overlay');
              if (img) {
                gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
              }
              if (overlay) {
                gsap.to(overlay, { opacity: 0, duration: 0.4 });
              }
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                height: '280px',
                objectFit: 'cover',
                display: 'block',
                transition: 'none',
              }}
            />
            {/* Hover Overlay */}
            <div
              className="overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(24, 12, 4, 0.75) 0%, transparent 60%)',
                opacity: 0,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#fcfaee',
                  fontStyle: 'italic',
                }}
              >
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
