import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Bride, December 2024',
    text: 'The bridal makeup was absolutely flawless! I felt like a princess on my wedding day. The attention to detail and the way they enhanced my natural beauty was incredible. My mehndi was so intricate and beautiful, everyone kept complimenting it.',
    rating: 5,
  },
  {
    name: 'Anika Patel',
    role: 'Bride, November 2024',
    text: 'From the trial session to the final look, everything was handled with such professionalism. The makeup lasted all day through all the ceremonies, and the mehndi design was exactly what I dreamed of. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Riya Gupta',
    role: 'Bride, January 2025',
    text: 'I cannot thank them enough for making me look and feel so beautiful. The team understood my vision perfectly and created a timeless, elegant look. The mehndi artistry was breathtaking - every detail was perfect.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    role: 'Bride, October 2024',
    text: 'Best bridal makeup artist! The products used were high quality, and the hygiene standards were excellent. My makeup looked fresh for 12+ hours. The mehndi design was stunning and got so many compliments from guests!',
    rating: 5,
  },
  {
    name: 'Meera Joshi',
    role: 'Bride, February 2025',
    text: 'The entire experience was wonderful from start to finish. They took the time to understand my preferences and skin type. The final look was beyond my expectations - elegant, natural, and absolutely radiant.',
    rating: 5,
  },
  {
    name: 'Divya Malhotra',
    role: 'Bride, March 2025',
    text: 'Exceptional service! The makeup was flawless and photographed beautifully. The mehndi artist created a custom design that incorporated elements from my wedding outfit. Truly talented and passionate artists!',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: i * 0.12,
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

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="feedback"
      ref={sectionRef}
      style={{
        backgroundColor: '#fcfaee',
        position: 'relative',
        zIndex: 2,
        padding: '100px 0 80px',
      }}
    >
      {/* Section Header */}
      <div
        ref={headerRef}
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
          Testimonials
        </p>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '42px',
            fontWeight: 500,
            lineHeight: 1.2,
            color: '#180c04',
            marginBottom: '16px',
          }}
        >
          Happy <em style={{ fontStyle: 'italic' }}>Brides</em> Say
        </h2>
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            color: '#696969',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Read what our beautiful brides have to say about their experience with us
        </p>
      </div>

      {/* Testimonial Cards */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {currentTestimonials.map((testimonial, i) => (
          <div
            key={testimonial.name}
            ref={(el) => { cardRefs.current[currentPage * itemsPerPage + i] = el; }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(24, 12, 4, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
            }}
          >
            <div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {Array.from({ length: testimonial.rating }).map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#c9a96e" stroke="#c9a96e" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: '#180c04',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(147, 137, 119, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#938977',
                  }}
                >
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#180c04',
                    marginBottom: '2px',
                  }}
                >
                  {testimonial.name}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#938977',
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '48px',
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: currentPage === i ? '#938977' : 'rgba(147, 137, 119, 0.3)',
                cursor: 'pointer',
                transition: 'background-color 0.4s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
