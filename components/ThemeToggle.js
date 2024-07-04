// components/ThemeToggle.js
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
    window.location.reload(); 
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 text-2xl p-2 z-50"
      style={{ backgroundColor: 'transparent', border: 'none' }} 
    >
      <FontAwesomeIcon
        icon={isDarkMode ? faMoon : faSun}
        style={{ backgroundColor: 'transparent', color: isDarkMode ? '#fff' : '#000' }} 
      />
    </button>
  );
}
