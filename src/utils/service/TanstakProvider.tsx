'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/i18n/config';
import { AnimatePresence, motion } from 'framer-motion';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="transition"
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
          >
            <motion.div
              initial={{ scale: 0, x: -1000 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0, x: -1000, }}
              transition={{ duration: 0.6 }}
              className="text-4xl"
            >
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </ThemeContext.Provider>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>{children}</ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
