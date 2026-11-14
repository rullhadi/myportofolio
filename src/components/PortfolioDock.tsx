import React from 'react';
import {
  Home,
  User,
  Briefcase,
  Ruler,
  Anchor,
  Mail,
  SunMoon,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

interface PortfolioDockProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const PortfolioDock: React.FC<PortfolioDockProps> = ({ darkMode, toggleDarkMode }) => {
  const items = [
    {
      title: 'Beranda',
      icon: <Home className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#hero',
    },
    {
      title: 'Tentang',
      icon: <User className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#about',
    },
    {
      title: 'Karier',
      icon: <Briefcase className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#experience',
    },
    {
      title: 'Keahlian',
      icon: <Ruler className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#skills',
    },
    {
      title: 'Proyek',
      icon: <Anchor className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#projects',
    },
    {
      title: 'Kontak',
      icon: <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '#contact',
    },
    {
      title: darkMode ? 'Terang' : 'Gelap',
      icon: <SunMoon className='h-full w-full text-amber-500 dark:text-sky-400' />,
      href: undefined,
      onClick: toggleDarkMode,
    },
  ];

  return (
    <div className='fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto px-2 w-fit'>
      {/* Glass pill container */}
      <div className='rounded-2xl p-1.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-700/60 shadow-2xl shadow-neutral-900/10 dark:shadow-black/30'>
        <Dock className='bg-transparent dark:bg-transparent gap-1.5'>
          {items.map((item, idx) =>
            item.href ? (
              /* ── Navigation link — click handled by <a> ── */
              <a
                key={idx}
                href={item.href}
                className='inline-flex outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl'
                aria-label={item.title}
              >
                <DockItem className='w-10 h-10 aspect-square rounded-xl bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors shadow-sm'>
                  <DockLabel>{item.title}</DockLabel>
                  <DockIcon>{item.icon}</DockIcon>
                </DockItem>
              </a>
            ) : (
              /* ── Action button — click handled by <button> ── */
              <button
                key={idx}
                type='button'
                onClick={item.onClick}
                className='inline-flex outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl'
                aria-label={item.title}
              >
                <DockItem className='w-10 h-10 aspect-square rounded-xl bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors shadow-sm'>
                  <DockLabel>{item.title}</DockLabel>
                  <DockIcon>{item.icon}</DockIcon>
                </DockItem>
              </button>
            )
          )}
        </Dock>
      </div>
    </div>
  );
};
