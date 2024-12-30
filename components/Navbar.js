import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Social from './Social';

const icons = {
  home: faHome,
  about: faUser,
  work: faBriefcase,
  contact: faEnvelope,
};

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setIsDarkMode(theme === 'dark');
  }, []);

  const navData = [
    { title: "Home", path: "/", icon: "home" },
    { title: "About", path: "/about", icon: "about" },
    { title: "Work", path: "/work", icon: "work" },
    { title: "Contact", path: "/contact", icon: "contact" },
  ];

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <ThemeToggle />
      <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
        <div className={`relative flex bg-black bg-opacity-20 w-full xl:flex-col items-center justify-between xl:justify-center gap-y-4 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-4 text-3xl xl:text-xl xl:rounded-full ${isDarkMode ? 'text-white' : 'text-black'} shadow-xl`}>
          {navData.map((link, index) => (
            <Link href={link.path} key={index} passHref>
              <div
                className={`group flex items-center ${link.path === pathname ? 'text-accent' : isDarkMode ? 'text-white' : 'text-black'} hover:text-accent transition-colors duration-300`}
                aria-label={link.title}
                onMouseEnter={() => setHoveredLink(link.title)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {hoveredLink === link.title ? (
                  <span className='font-fredoka transition-opacity duration-300 text-xs lg:text-md md:text-md sm:text-md'>{link.title}</span>
                ) : (
                  <FontAwesomeIcon icon={icons[link.icon]} className='transition-opacity duration-300' style={{ color: isDarkMode ? '#fff' : '#000' }} />
                )}
              </div>
            </Link>
          ))}
        <Social />
        </div>
      </nav>
    </div>
  );
}
