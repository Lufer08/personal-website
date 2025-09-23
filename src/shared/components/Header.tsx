import React from 'react';
import { Button, Avatar } from 'flowbite-react';

interface HeaderProps {
  setShowModal: (show: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setShowModal, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar
              img=""
              alt="Luis F. Reyes H."
              rounded
              size="sm"
              className="md:w-10 md:h-10"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900">Luis F. Reyes H.</h1>
              <p className="text-xs md:text-sm text-gray-600">Estudiante de Ingeniería de Sistemas e Información</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">Sobre mí</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">Habilidades</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">Proyectos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              color="blue"
              size="sm"
              onClick={() => setShowModal(true)}
              className="text-xs px-3 py-2"
            >
              CV
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop CV Button */}
          <Button
            color="blue"
            size="sm"
            onClick={() => setShowModal(true)}
            className="hidden md:block px-4 py-2"
          >
            Descargar CV
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre mí</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Habilidades</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
