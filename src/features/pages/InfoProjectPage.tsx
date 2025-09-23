import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, Badge, Button } from 'flowbite-react';
import { ArrowLeftIcon, CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import proyectsData from '../../core/proyectsDev.json';

interface Project {
  id: string;
  nombre: string;
  categoria: string;
  ubicacion: string;
  descripcion: string;
  actividades_servicios: string[];
  procesos_principales: string[];
  proceso_automatizar: string;
  requisitos_funcionales: string[];
  requisitos_no_funcionales: string[];
  tecnologias: string[];
}

const InfoProjectPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener el ID del proyecto desde los parámetros de URL
  const projectId = searchParams.get('id');

  useEffect(() => {
    const loadProject = () => {
      setLoading(true);
      setError(null);

      if (!projectId) {
        setError('No se especificó un ID de proyecto');
        setLoading(false);
        return;
      }

      // Buscar el proyecto en los datos
      const foundProject = proyectsData.projects_dev.find(p => p.id === projectId);
      
      if (!foundProject) {
        setError(`Proyecto con ID "${projectId}" no encontrado`);
        setLoading(false);
        return;
      }

      setProject(foundProject);
      setLoading(false);
    };

    loadProject();
  }, [projectId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const getTechnologyColor = (tech: string): string => {
    const colors: { [key: string]: string } = {
      'C++': 'red',
      'PostgreSQL': 'blue',
      'Spring Boot': 'green',
      'Angular': 'red',
      'JavaScript': 'yellow',
      'MySQL': 'blue',
      'React': 'cyan',
      'TypeScript': 'blue',
      'Python': 'yellow',
      'Java': 'orange'
    };
    return colors[tech] || 'gray';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando proyecto...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Proyecto no encontrado</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={handleGoBack} color="blue">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Volver
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Button onClick={handleGoBack} color="gray" size="sm">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <Badge color="purple" size="lg">
              {project.categoria}
            </Badge>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* Título y ubicación */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.nombre}
          </h1>
          <p className="text-lg text-gray-600 mb-2">📍 {project.ubicacion}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {project.tecnologias.map((tech, index) => (
              <Badge key={index} color={getTechnologyColor(tech)} size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Imagen placeholder */}
        <div className="mb-8">
          <Card className="overflow-hidden">
            <div className="h-64 sm:h-80 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">
                  {project.categoria.includes('Web') || project.categoria.includes('Móvil') ? '🌐' : '💼'}
                </div>
                <p className="text-lg font-semibold">Imagen del Proyecto</p>
                <p className="text-sm opacity-80">Placeholder - {project.nombre}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Grid de información */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Descripción general */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CodeBracketIcon className="w-6 h-6 mr-2 text-blue-600" />
              Descripción del Proyecto
            </h2>
            <p className="text-gray-400 leading-relaxed text-justify font-medium">
              {project.descripcion}
            </p>
            <div className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">Proceso a Automatizar:</h3>
              <p className="text-blue-900 font-medium">{project.proceso_automatizar}</p>
            </div>
          </Card>

          {/* Actividades y servicios */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <GlobeAltIcon className="w-6 h-6 mr-2 text-green-600" />
              Actividades y Servicios
            </h2>
            <ul className="space-y-2">
              {project.actividades_servicios.map((actividad, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-400 font-medium">{actividad}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Procesos principales */}
        <Card className="p-6 mb-8 bg-white border border-gray-200 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">🔄 Procesos Principales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.procesos_principales.map((proceso, index) => (
              <div key={index} className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
                <div className="flex items-center mb-2">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded">
                    {index + 1}
                  </span>
                </div>
                <p className="text-purple-900 text-sm font-semibold">{proceso}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Requisitos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requisitos funcionales */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">⚙️ Requisitos Funcionales</h2>
            <div className="space-y-3">
              {project.requisitos_funcionales.map((requisito, index) => (
                <div key={index} className="flex items-start bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded mr-3 mt-0.5">
                    RF{index + 1}
                  </span>
                  <span className="text-blue-900 text-sm font-semibold">{requisito}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Requisitos no funcionales */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">🛡️ Requisitos No Funcionales</h2>
            <div className="space-y-3">
              {project.requisitos_no_funcionales.map((requisito, index) => (
                <div key={index} className="flex items-start bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded mr-3 mt-0.5">
                    RNF{index + 1}
                  </span>
                  <span className="text-orange-900 text-sm font-semibold">{requisito}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Botón de acción */}
        <div className="flex justify-center mt-8">
          <Button size="lg" color="blue" className="w-full sm:w-auto">
            <CodeBracketIcon className="w-5 h-5 mr-2" />
            Ver Código en GitHub
          </Button>
        </div>
      </main>
    </div>
  );
};

export default InfoProjectPage;