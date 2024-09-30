import { useState, useEffect } from 'react';

export function MobileSideBarHook() {
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileSidebarVisible(width < 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileSidebarVisible;
}

