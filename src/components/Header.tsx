import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { PortalScreen } from '../types/quran';

interface HeaderProps {
  activeScreen: PortalScreen;
  onNavigate: (screen: PortalScreen) => void;
  onOpenQuickJump: () => void;
}

const NAV_ITEMS: Array<{ id: PortalScreen; label: string }> = [
  { id: 'reader', label: 'Quran Reader' },
  { id: 'index', label: 'Surah Index' },
  { id: 'lexicon', label: 'Root Lexicon' },
  { id: 'notes', label: 'Study Notes' },
];

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  onOpenQuickJump,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (screen: PortalScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#FBF9F4] border-b border-[#C5A059]/25">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('reader')}
          className="font-editorial text-xl sm:text-2xl font-semibold tracking-tight text-[#134E3C] hover:text-[#0F382C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C] rounded"
        >
          Al-Mizan
        </button>

        {/* Zone 2: 4 concise single-line text nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`py-1 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C] rounded-t ${
                  isActive
                    ? 'text-[#134E3C] border-[#C5A059]'
                    : 'text-[#404944] border-transparent hover:text-[#134E3C] hover:border-[#C5A059]/45'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + mobile menu drawer toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenQuickJump}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#134E3C] hover:bg-[#0F382C] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F4]"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
            <span>Quick Jump</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#C5A059]/40 bg-white text-[#134E3C] hover:bg-[#E6F0EB] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#C5A059]/20 bg-[#F4EFE6] px-4 py-3 flex flex-col gap-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#E6F0EB] text-[#134E3C]'
                    : 'text-[#1E293B] hover:bg-white/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
