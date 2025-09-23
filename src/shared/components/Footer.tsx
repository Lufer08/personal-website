import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="text-gray-400 text-sm sm:text-base">
          © 2025 [TU NOMBRE]. Todos los derechos reservados.
        </p>
        <p className="text-gray-500 text-xs sm:text-sm mt-2">
          Desarrollado con ❤️ usando React, TypeScript, Tailwind CSS y Flowbite
        </p>
      </div>
    </footer>
  );
};

export default Footer;
