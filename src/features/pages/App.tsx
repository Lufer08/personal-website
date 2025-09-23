import { Button, Card, Badge, Modal } from 'flowbite-react';
import { EnvelopeIcon, BuildingOfficeIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';
import luisVerdeImg from '../../assets/my_avatar/Luis_Verde.jpg';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header setShowModal={setShowModal} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Hola, soy Luis F. Reyes H.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100">
              Estudiante de Ingeniería de Sistemas e Información especializado en Desarrollo de aplicaciones con enfoque en Data Analytics, Web y Videojuegos
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-blue-100 max-w-2xl mx-auto px-4">
              Apasionado por la tecnología y la creación de soluciones digitales. Actualmente en 8.º ciclo de Ingeniería de Sistemas en la UPC, con proyectos en dashboards, aplicaciones web y desarrollo de videojuegos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
              <Button color="light" size="lg" className="w-full sm:w-auto">
                Ver mis trabajos
              </Button>
              <Button color="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Sobre mí</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 items-center mb-8">
              <div className="order-1 lg:order-1">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">Acerca de mí</h4>
                <div className="space-y-4 text-justify">
                  <p className="text-gray-600 text-sm sm:text-base">
                    Actualmente curso el 8.º ciclo de la carrera de Ingeniería de Sistemas e Información en la UPC. He trabajado en proyectos académicos y personales enfocados en analítica de datos, diseño de dashboards y desarrollo de soluciones tecnológicas.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Mi objetivo es seguir creciendo como profesional en el área de Data Analytics y Desarrollo Web, aportando con proyectos que combinen innovación tecnológica y aplicabilidad en el mundo real.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Me apasiona construir aplicaciones y experiencias digitales, desde la visualización de datos hasta la creación de videojuegos, siempre con enfoque en el aprendizaje constante y la mejora continua.
                  </p>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="flex justify-center lg:justify-end mb-1">
                  {/* Contenedor de perfil con imagen y contacto */}
                  <div className="perfil-container lg:transform lg:-translate-x-[130px]">
                    <img
                      src={luisVerdeImg}
                      alt="Luis F. Reyes H."
                      className="w-40 sm:w-48 rounded-[100px] object-cover border-4 border-gray-300 shadow-lg"
                    />
                    {/* Información de contacto debajo de la imagen */}
                    <div className="text-center space-y-2 mt-4">
                      <div>
                        <span className="text-gray-700 text-sm font-medium">Luferreyes08@gmail.com</span>
                      </div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium">956260527</span>
                      </div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium">Lima, Perú</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Habilidades Técnicas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-4 sm:p-6">
                <h5 className="text-lg sm:text-xl font-semibold text-white mb-4">Competencias Analíticas</h5>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">Python</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★★☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">SQL</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">Power BI</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★★☆</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-white">Excel</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6">
                <h5 className="text-lg sm:text-xl font-semibold text-white mb-4">Competencias Creativas</h5>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">C#</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">Unity</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">Git/GitHub</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-white">Photoshop</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <h5 className="text-lg sm:text-xl font-semibold text-white mb-4">Competencias de Desarrollo</h5>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">JavaScript</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">React</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">Supabase</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">PostgreSQL</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">MySQL</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">SQLite</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs sm:text-sm font-medium text-white">Visual Studio Code</span>
                      <span className="text-xs sm:text-sm text-yellow-400">★★★★☆</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-white">Figma</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 sm:mt-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Habilidades Blandas</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <Badge color="blue" size="sm" className="text-sm">Comunicación</Badge>
                <Badge color="green" size="sm" className="text-sm">Trabajo en Equipo</Badge>
                <Badge color="purple" size="sm" className="text-sm">Liderazgo</Badge>
                <Badge color="red" size="sm" className="text-sm">Resolución de Problemas</Badge>
                <Badge color="orange" size="sm" className="text-sm">Adaptabilidad</Badge>
                <Badge color="teal" size="sm" className="text-sm">Pensamiento Crítico</Badge>
                <Badge color="pink" size="sm" className="text-sm">Gestión del Tiempo</Badge>
                <Badge color="cyan" size="sm" className="text-sm">Aprendizaje Continuo</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Mis Proyectos</h3>
            <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                En este portafolio comparto los trabajos que estoy desarrollando en tres áreas principales:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Business Analytics</h4>
                  <p className="text-sm text-blue-700">
                    Proyectos enfocados en el análisis de datos, creación de dashboards interactivos y generación de insights que apoyan la toma de decisiones.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Desarrollo Web</h4>
                  <p className="text-sm text-green-700">
                    Aplicaciones y sitios web creados con tecnologías modernas, centrados en la funcionalidad, la escalabilidad y la experiencia del usuario.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Desarrollo de Videojuegos</h4>
                  <p className="text-sm text-purple-700">
                    Experimentos y prototipos de videojuegos, donde exploro mecánicas, diseño de niveles y programación de la lógica de juego.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-500 mt-4">
                Cada apartado incluye proyectos en diferentes fases de avance, desde prototipos hasta versiones funcionales.
              </p>
            </div>
            <div className="space-y-12 sm:space-y-16">
              {/* Business Analytics Projects */}
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">Business Analytics</h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">📊</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_ANALYTICS_1]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_ANALYTICS_1]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="blue" size="sm" className="text-xs">[TECNOLOGÍA_ANALYTICS_1]</Badge>
                      <Badge color="green" size="sm" className="text-xs">[TECNOLOGÍA_ANALYTICS_2]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="blue" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_ANALYTICS_1]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_ANALYTICS_1]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">📈</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_ANALYTICS_2]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_ANALYTICS_2]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="blue" size="sm" className="text-xs">[TECNOLOGÍA_ANALYTICS_3]</Badge>
                      <Badge color="purple" size="sm" className="text-xs">[TECNOLOGÍA_ANALYTICS_4]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="blue" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_ANALYTICS_2]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_ANALYTICS_2]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">📊</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_ANALYTICS_3]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_ANALYTICS_3]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="blue" size="sm" className="text-xs">[TECNOLOGÍA_ANALYTICS_5]</Badge>
                      <Badge color="green" size="sm" className="text-xs">[TECNOLOGÍA_ANALYTICS_6]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="blue" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_ANALYTICS_3]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_ANALYTICS_3]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Web Development Projects */}
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900 mb-6 sm:mb-8 text-center">Desarrollo Web</h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">🌐</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_WEB_1]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_WEB_1]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="green" size="sm" className="text-xs">[TECNOLOGÍA_WEB_1]</Badge>
                      <Badge color="blue" size="sm" className="text-xs">[TECNOLOGÍA_WEB_2]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="green" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_WEB_1]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_WEB_1]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-green-500 to-green-700 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">⚛️</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_WEB_2]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_WEB_2]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="green" size="sm" className="text-xs">[TECNOLOGÍA_WEB_3]</Badge>
                      <Badge color="purple" size="sm" className="text-xs">[TECNOLOGÍA_WEB_4]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="green" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_WEB_2]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_WEB_2]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-green-600 to-green-800 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">🚀</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_WEB_3]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_WEB_3]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="green" size="sm" className="text-xs">[TECNOLOGÍA_WEB_5]</Badge>
                      <Badge color="blue" size="sm" className="text-xs">[TECNOLOGÍA_WEB_6]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="green" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_WEB_3]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_WEB_3]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Game Development Projects */}
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-900 mb-6 sm:mb-8 text-center">Desarrollo de Videojuegos</h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">🎮</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_GAME_1]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_GAME_1]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="purple" size="sm" className="text-xs">[TECNOLOGÍA_GAME_1]</Badge>
                      <Badge color="red" size="sm" className="text-xs">[TECNOLOGÍA_GAME_2]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="purple" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_GAME_1]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_GAME_1]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">🕹️</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_GAME_2]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_GAME_2]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="purple" size="sm" className="text-xs">[TECNOLOGÍA_GAME_3]</Badge>
                      <Badge color="blue" size="sm" className="text-xs">[TECNOLOGÍA_GAME_4]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="purple" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_GAME_2]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_GAME_2]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl">🎯</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">[NOMBRE_DEL_PROYECTO_GAME_3]</h5>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      [DESCRIPCIÓN_BREVE_DEL_PROYECTO_GAME_3]
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      <Badge color="purple" size="sm" className="text-xs">[TECNOLOGÍA_GAME_5]</Badge>
                      <Badge color="green" size="sm" className="text-xs">[TECNOLOGÍA_GAME_6]</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" color="purple" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_PROYECTO_GAME_3]" target="_blank" rel="noopener noreferrer" className="text-white">
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button size="sm" color="gray" className="w-full sm:w-auto text-xs sm:text-sm">
                        <a href="[URL_DEL_CÓDIGO_GAME_3]" target="_blank" rel="noopener noreferrer">
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">¿Hablamos?</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Estoy interesado en oportunidades de Prácticas pre-profesionales o proyectos en Data Analytics, Desarrollo Web o Game Dev.
              ¡No dudes en contactarme!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <EnvelopeIcon className="text-blue-600 text-xl sm:text-2xl" />
                </div>
                <h5 className="text-base sm:text-lg font-semibold text-white mb-2">Email</h5>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Luferreyes08@gmail.com</p>
                <Button size="md" className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                  <a href="mailto:Luferreyes08@gmail.com" className="text-white hover:text-blue-600 text-xs sm:text-sm">
                    Enviar Email
                  </a>
                </Button>
              </Card>

              <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <BuildingOfficeIcon className="text-green-600 text-xl sm:text-2xl" />
                </div>
                <h5 className="text-base sm:text-lg font-semibold text-white mb-2">LinkedIn</h5>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Luis F. Reyes H.</p>
                <Button size="md" className="bg-green-600 text-white hover:bg-white hover:text-green-600 w-full sm:w-auto">
                  <a href="https://www.linkedin.com/in/luis-reyes-huaman-699ab0284" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-600 text-xs sm:text-sm">
                    Ver Perfil
                  </a>
                </Button>
              </Card>

              <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CodeBracketSquareIcon className="text-purple-600 text-xl sm:text-2xl" />
                </div>
                <h5 className="text-base sm:text-lg font-semibold text-white mb-2">GitHub</h5>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Lufer08</p>
                <Button size="md" className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 w-full sm:w-auto">
                  <a href="https://github.com/Lufer08" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-600 text-xs sm:text-sm">
                    Ver Repositorios
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal de CV */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Descargar Curriculum Vitae
          </h3>
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-gray-500">
              Puedes descargar mi CV actualizado en formato PDF.
            </p>
            <div className="flex justify-center">
              <Button color="blue" size="lg">
                <a href="[URL_DE_TU_CV_PDF]" target="_blank" rel="noopener noreferrer" className="text-white">
                  📄 Descargar CV
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={() => setShowModal(false)}>
              Cerrar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;