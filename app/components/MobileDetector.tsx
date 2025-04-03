'use client';

import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export function MobileDetector({ children }: { children: (isMobile: boolean) => React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Return null during SSR
  if (!mounted) return null;

  return <>{children(isMobile)}</>;
} 