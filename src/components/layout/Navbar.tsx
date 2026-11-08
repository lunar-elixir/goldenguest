import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Search, ShieldCheck, Menu, X, Award, MapPin } from 'lucide-react';
import { CITY_GUIDES } from '../../data/cities';

export const Navbar: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [unlockedCount, setUnlockedCount] = useState(1); // Paris default demo + local storage
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('goldenguest_unlocked_badges');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setUnlockedCount(parsed.length);
        }
      }
    } catch {
      // ignore storage errors
    }
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Mission', path: '/mission' },
    { label: 'Membership', path: '/membership' },
    { label: 'Badges', path: '/badges' },
    { label: 'FAQs', path: '/faqs' },
  ];

  const filteredCities = CITY_GUIDES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.motto.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="w-full bg-[#141413] text-white relative z-50">
      {/* Top Utility Bar */}
      <div className="border-b border-white/10 bg-[#0E0E0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs">
          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-white/75 hover:text-[#C5A059] transition-colors tracking-widest uppercase font-medium py-1"
              aria-label="Select Language"
            >
              <span>ENGLISH</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>

            {langOpen && (
              <div
                className="absolute left-0 mt-1 w-56 bg-[#1C1C1A] border border-white/15 rounded shadow-xl py-2 z-50"
                onMouseLeave={() => setLangOpen(false)}
              >
                <div className="px-3 py-1 text-[10px] tracking-widest uppercase text-[#C5A059] border-b border-white/10 mb-1">
                  Interface Language
                </div>
                <button
                  type="button"
                  onClick={() => setLangOpen(false)}
                  className="w-full text-left px-3 py-1.5 text-xs text-white bg-white/5 flex items-center justify-between"
                >
                  <span>English (EN)</span>
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-wider">Active</span>
                </button>
                {['Français (FR)', 'Español (ES)', 'Català (CA)', 'Italiano (IT)', '日本語 (JA)'].map(
                  (lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setLangOpen(false);
                        navigate('/faqs');
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-white/50 hover:text-white hover:bg-white/5 flex items-center justify-between transition-colors"
                    >
                      <span>{lang}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/60">
                        Phase 2
                      </span>
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Right Utility Controls: Search & Local Passport Status (Zero-PII) */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 text-white/75 hover:text-[#C5A059] transition-colors"
              title="Search City Guides"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px] tracking-wider text-white/60">
                Quick Find
              </span>
            </button>

            <Link
              to="/membership"
              className="flex items-center gap-1.5 text-white/80 hover:text-[#C5A059] transition-colors pl-3 border-l border-white/10"
              title="Client-Side Passport (Zero PII Collected)"
            >
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[11px] tracking-wider">
                Passport ({unlockedCount})
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Search Dropdown Overlay */}
      {searchOpen && (
        <div className="bg-[#1C1C1A] border-b border-[#C5A059]/30 py-4 px-4 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-[#141413] border border-white/15 px-3.5 py-2.5 rounded">
              <Search className="w-4 h-4 text-[#C5A059]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations (Paris, Barcelona, London, Rome, Tokyo)..."
                className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-white/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest text-white/50 mr-1">
                City Guides:
              </span>
              {filteredCities.map((city) => (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                    navigate(`/guides/${city.id}`);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-[#C5A059] hover:text-[#141413] text-xs text-white/90 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-[#C5A059] group-hover:text-[#141413]" />
                  <span>{city.name}</span>
                  <span className="text-[10px] opacity-60">· {city.motto}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Middle Brand Banner with Centered GoldenGuest Laurel */}
      <div className="bg-dark-map py-6 sm:py-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          {/* Left Tagline */}
          <div className="hidden md:flex flex-col items-center text-center">
            <span className="text-[11px] tracking-[0.25em] uppercase text-white/80 font-medium">
              Conscious Travel
            </span>
            <span className="font-serif italic text-sm text-white/50 mt-1">
              Respecting local cultures
            </span>
          </div>

          {/* Center Laurel Logo */}
          <div className="flex justify-center">
            <Link to="/" className="group focus:outline-none">
              <img
                src="/assets/GoldenGues-Org_Logo.png"
                alt="GoldenGuest Membership Logo"
                className="h-24 sm:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Right Tagline */}
          <div className="hidden md:flex flex-col items-center text-center">
            <span className="text-[11px] tracking-[0.25em] uppercase text-white/80 font-medium">
              Shared Harmony
            </span>
            <span className="font-serif italic text-sm text-white/50 mt-1">
              Connecting guests &amp; communities
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#1C1C1A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-center h-12">
            {/* Mobile Brand indicator */}
            <div className="flex md:hidden items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059]">
              <ShieldCheck className="w-4 h-4" />
              <span>GoldenGuest.org</span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => {
                const isCityGuideRoute =
                  item.path === '/badges' && location.pathname.startsWith('/guides/');
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `text-xs tracking-[0.18em] uppercase font-medium transition-colors py-3 border-b-2 ${
                        isActive || isCityGuideRoute
                          ? 'text-[#C5A059] border-[#C5A059]'
                          : 'text-white/80 border-transparent hover:text-[#C5A059]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white/80 hover:text-[#C5A059] p-1.5"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141413] border-t border-white/10 px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded text-xs tracking-[0.18em] uppercase font-medium ${
                    isActive
                      ? 'bg-[#C5A059]/15 text-[#C5A059]'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

