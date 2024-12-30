import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Social = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const iconClass = isDarkMode ? 'text-white bg-gray-800' : 'text-black bg-white';

  const hoverColors = {
    github: 'hover:text-gray-600',
    linkedin: 'hover:text-blue-600',
    twitter: 'hover:text-blue-500',
    whatsapp: 'hover:text-green-600',
  };

  return (
    <div className="fixed top-4 left-6 z-50">
      {/* Hamburger menu button visible only on mobile and tablet screens */}
      <button onClick={toggleMenu} className={`text-2xl text-black rounded-full p-2 shadow-lg transition-transform transform hover:scale-110 ${iconClass} lg:hidden`}>
        <FontAwesomeIcon icon={faBars} className='text-black' />
      </button>
      {/* Icons visible by default on larger screens */}
      <div className={`flex flex-col items-center mt-4 space-y-4 ${isOpen ? '' : 'hidden'} lg:flex lg:flex-row lg:space-y-0 lg:space-x-4`}>
        <a href="https://github.com/karan-panda" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center text-2xl rounded-full p-2 shadow-lg transition-all duration-500 transform hover:scale-110 hover:w-12 ${iconClass} ${hoverColors.github}`}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/karanpanda" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center text-2xl rounded-full p-2 shadow-lg transition-all duration-500 transform hover:scale-110 hover:w-12 ${iconClass} ${hoverColors.linkedin}`}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://x.com/KaranPanda_" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center text-2xl rounded-full p-2 shadow-lg transition-all duration-500 transform hover:scale-110 hover:w-12 ${iconClass} ${hoverColors.twitter}`}>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://wa.me/917715067060" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center text-2xl rounded-full p-2 shadow-lg transition-all duration-500 transform hover:scale-110 hover:w-12 ${iconClass} ${hoverColors.whatsapp}`}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
};

export default Social;