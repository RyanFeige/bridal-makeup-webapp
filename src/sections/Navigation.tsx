import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getLenis } from '../hooks/useLenis';
import { navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const probeY = navHeight > 0 ? navHeight * 0.6 : 60;
      const lightSectionIds = ['anatomy', 'tiers', 'feedback', 'contact', 'footer'];
      const isInLightSection = lightSectionIds.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom >= probeY;
      });

      setIsLightSection(isInLightSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (mql.matches) setMobileOpen(false);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const baseTextColor = isLightSection ? '#180c04' : '#fcfaee';
  const hoverTextColor = isLightSection ? '#696969' : '#938977';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(targetId);
    } else {
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkStyle: React.CSSProperties = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    color: baseTextColor,
    letterSpacing: '1.3px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'color 0.6s ease',
    opacity: 0.85,
  };

  if (!navigationConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '12px 10px 12px' : '16px 10px 16px',
        transition: 'padding 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="sm:px-4"
    >
      <div
        className="liquid-glass mx-auto flex max-w-[1200px] flex-col rounded-[2px] px-4 py-3 sm:px-5 md:flex-row md:items-center md:justify-between md:px-10 md:py-[14px]"
      >
        <div className="flex w-full min-w-0 items-center justify-between gap-3">
          {navigationConfig.brandName ? (
            <a
              href="#hero"
              className="min-w-0 shrink truncate"
              onClick={(e) => handleNavClick(e, '#hero')}
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(14px, 4vw, 20px)',
                fontWeight: 500,
                color: baseTextColor,
                letterSpacing: '2px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.6s ease',
              }}
            >
              {navigationConfig.brandName}
            </a>
          ) : (
            <div />
          )}

          <div className="hidden items-center gap-7 lg:gap-9 md:flex">
            {navigationConfig.links.map((item) => (
              <a
                key={`${item.label}-${item.target}`}
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className="nav-link whitespace-nowrap"
                style={linkStyle}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = hoverTextColor;
                  (e.target as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = baseTextColor;
                  (e.target as HTMLAnchorElement).style.opacity = '0.85';
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-[2px] border bg-white/[0.06] backdrop-blur-sm md:hidden"
            style={{
              color: baseTextColor,
              borderColor: isLightSection ? 'rgba(24, 12, 4, 0.14)' : 'rgba(252, 250, 238, 0.22)',
            }}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-links"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" strokeWidth={1.5} aria-hidden /> : <Menu className="size-5" strokeWidth={1.5} aria-hidden />}
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-nav-links"
            className="mt-4 flex flex-col gap-1 border-t pt-4 md:hidden"
            style={{
              borderColor: isLightSection ? 'rgba(24, 12, 4, 0.1)' : 'rgba(252, 250, 238, 0.14)',
            }}
          >
            {navigationConfig.links.map((item) => (
              <a
                key={`m-${item.label}-${item.target}`}
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className="rounded-[2px] px-3 py-3"
                style={{
                  ...linkStyle,
                  backgroundColor: 'transparent',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
