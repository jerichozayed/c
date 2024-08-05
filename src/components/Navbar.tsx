import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url("https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap");

      .navbar-font {
        font-family: "Miltonian Tattoo", sans-serif;
        font-size: 1.25rem; /* Adjust this value as needed */
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-white py-3 px-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-semibold navbar-font">Cronulla Ink</a>
        <div className="hidden md:flex space-x-4 navbar-font">
          <Link href="/" legacyBehavior>
            <a className="hover:text-gray-300">HOME</a>
          </Link>
          <Link href="/artists" legacyBehavior>
            <a className="hover:text-gray-300">ARTISTS</a>
          </Link>
          <Link href="/book-now" legacyBehavior>
            <a className="hover:text-gray-300">BOOK NOW</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="hover:text-gray-300">FAQ</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-gray-300">CONTACT</a>
          </Link>
          <Link href="/consent-form" legacyBehavior>
            <a className="hover:text-gray-300">CONSENT FORM</a>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white py-2 px-4 navbar-font">
          <Link href="/" legacyBehavior>
            <a className="block py-2 hover:text-gray-300" onClick={toggleMenu}>HOME</a>
          </Link>
          <Link href="/artists" legacyBehavior>
            <a className="block py-2 hover:text-gray-300" onClick={toggleMenu}>ARTISTS</a>
          </Link>
          <Link href="/book-now" legacyBehavior>
            <a className="block py-2 hover:text-gray-300" onClick={toggleMenu}>BOOK NOW</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="block py-2 hover:text-gray-300" onClick={toggleMenu}>FAQ</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block py-2 hover:text-gray-300" onClick={toggleMenu}>CONTACT</a>
          </Link>
          <Link href="/consent-form" legacyBehavior>
            <a className="block py-2 hover:text-gray-300" onClick={toggleMenu}>CONSENT FORM</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
