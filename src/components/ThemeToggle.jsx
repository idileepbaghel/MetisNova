import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 group"
      style={{
        backgroundColor: theme.hover,
        color: theme.text.primary,
      }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {isDark ? (
          <Moon
            size={24}
            className="transition-all duration-300 opacity-100"
          />
        ) : (
          <Sun
            size={24}
            className="transition-all duration-300 opacity-100"
          />
        )}
      </div>
      
      {/* Tooltip */}
      <div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          backgroundColor: theme.text.primary,
          color: theme.background,
        }}
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  );
}
