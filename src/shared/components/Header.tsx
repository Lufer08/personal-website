import React from 'react';
import { Button } from 'flowbite-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  setShowModal: (show: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setShowModal, isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Si no estamos en la página principal, navegar primero
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Pequeño delay para asegurar que la página se carga antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en la página principal, solo hacer scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Cerrar el menú móvil si está abierto
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Nombre */}
          <div className="flex items-center min-w-0">
            <div>
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Luis F. Reyes H.</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Estudiante de Ingeniería de Sistemas</p>
              </Link>
            </div>
          </div>

          {/* Desktop Menu - Centrado */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base whitespace-nowrap">Sobre mí</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base whitespace-nowrap">Habilidades</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base whitespace-nowrap">Proyectos</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base whitespace-nowrap">Contacto</button>
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
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
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
            className="hidden md:block px-4 py-2 whitespace-nowrap"
          >
            Descargar CV
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">Sobre mí</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">Habilidades</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">Proyectos</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left">Contacto</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
