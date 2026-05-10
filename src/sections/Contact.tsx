import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: infoRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '13px',
    fontWeight: 400,
    color: '#180c04',
    backgroundColor: 'rgba(252, 250, 238, 0.6)',
    border: '1px solid rgba(24, 12, 4, 0.15)',
    borderRadius: '2px',
    outline: 'none',
    transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        backgroundColor: '#f0ecd7',
        position: 'relative',
        zIndex: 2,
        padding: '100px 0 80px',
      }}
    >
      {/* Section Header */}
      <div
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
          Get in Touch
        </p>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '42px',
            fontWeight: 500,
            lineHeight: 1.2,
            color: '#180c04',
          }}
        >
          Book Your <em style={{ fontStyle: 'italic' }}>Appointment</em>
        </h2>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          gap: '60px',
          flexWrap: 'wrap',
        }}
      >
        {/* Contact Info */}
        <div
          ref={infoRef}
          style={{
            flex: '1 1 340px',
            minWidth: '280px',
          }}
        >
          <h3
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '26px',
              fontWeight: 600,
              color: '#180c04',
              marginBottom: '24px',
            }}
          >
            Let Us Create Your Perfect Bridal Look
          </h3>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#696969',
              marginBottom: '36px',
            }}
          >
            Every bride deserves to feel radiant on her special day. Contact us to discuss your bridal makeup and mehndi needs. We offer personalized consultations to understand your vision and bring it to life.
          </p>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(147, 137, 119, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#938977" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 600, color: '#938977', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Phone</p>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#180c04' }}>+91 98765 43210</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(147, 137, 119, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#938977" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 600, color: '#938977', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Email</p>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#180c04' }}>bridalglamour@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(147, 137, 119, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#938977" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 600, color: '#938977', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Location</p>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#180c04' }}>Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 400px',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = '#938977'; e.target.style.boxShadow = '0 0 0 3px rgba(147, 137, 119, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(24, 12, 4, 0.15)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = '#938977'; e.target.style.boxShadow = '0 0 0 3px rgba(147, 137, 119, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(24, 12, 4, 0.15)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = '#938977'; e.target.style.boxShadow = '0 0 0 3px rgba(147, 137, 119, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(24, 12, 4, 0.15)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23696969' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 14px center',
                  paddingRight: '40px',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#938977'; e.target.style.boxShadow = '0 0 0 3px rgba(147, 137, 119, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(24, 12, 4, 0.15)'; e.target.style.boxShadow = 'none'; }}
              >
                <option value="">Select Service</option>
                <option value="bridal-makeup">Bridal Makeup</option>
                <option value="bridal-mehndi">Bridal Mehndi</option>
                <option value="engagement-makeup">Engagement Makeup</option>
                <option value="party-makeup">Party Makeup</option>
                <option value="both">Makeup & Mehndi Package</option>
              </select>
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your special day and requirements..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: '120px',
            }}
            onFocus={(e) => { e.target.style.borderColor = '#938977'; e.target.style.boxShadow = '0 0 0 3px rgba(147, 137, 119, 0.1)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'rgba(24, 12, 4, 0.15)'; e.target.style.boxShadow = 'none'; }}
          />

          <button
            type="submit"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: '#fcfaee',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              backgroundColor: submitted ? '#4a7c59' : '#180c04',
              border: 'none',
              borderRadius: '2px',
              padding: '16px 40px',
              cursor: 'pointer',
              transition: 'all 0.6s ease',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={(e) => {
              if (!submitted) {
                e.currentTarget.style.backgroundColor = '#938977';
              }
            }}
            onMouseLeave={(e) => {
              if (!submitted) {
                e.currentTarget.style.backgroundColor = '#180c04';
              }
            }}
          >
            {submitted ? 'Message Sent!' : 'Send Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}
