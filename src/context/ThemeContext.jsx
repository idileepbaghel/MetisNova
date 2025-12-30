import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme configuration
export const THEME_CONFIG = {
  light: {
    bgPrimary: '#F5F5F5',
    bgSecondary: '#FFFFFF',
    bgTertiary: '#EEEEEE',
    text: '#000000',
    textSecondary: '#333333',
    textTertiary: '#666666',
    accent: '#0066FF',
    accentDark: '#0052CC',
    accentAlt: '#FF3366',
    buttonBg: '#0066FF',
    buttonText: '#FFFFFF',
    buttonHover: '#0052CC',
    border: '#DDDDDD',
    cardBg: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.08)'
  },
  dark: {
    bgPrimary: '#1A1A1A',
    bgSecondary: '#2D2D2D',
    bgTertiary: '#3A3A3A',
    text: '#FFFFFF',
    textSecondary: '#E0E0E0',
    textTertiary: '#B0B0B0',
    accent: '#0066FF',
    accentDark: '#0052CC',
    accentAlt: '#FF3366',
    buttonBg: '#0066FF',
    buttonText: '#FFFFFF',
    buttonHover: '#0052CC',
    border: '#444444',
    cardBg: '#2D2D2D',
    shadow: 'rgba(0, 0, 0, 0.3)'
  },
};

// Create theme context
const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('metisnova-theme-dark');
      return saved !== null ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('metisnova-theme-dark', JSON.stringify(isDark));
    // Apply theme to document root
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const theme = isDark ? THEME_CONFIG.dark : THEME_CONFIG.light;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
