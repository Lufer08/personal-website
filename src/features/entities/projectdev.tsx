// Interfaz para proyectos de desarrollo de software
export interface ProjectDev {
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

// Interfaz para proyectos de analytics (para uso futuro)
export interface ProjectAnalytics {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  herramientas: string[];
  metodologia: string;
  fuentes_datos: string[];
  metricas_kpi: string[];
  insights: string[];
  tecnologias: string[];
}

// Interfaz para proyectos de juegos (para uso futuro)
export interface ProjectGames {
  id: string;
  nombre: string;
  genero: string;
  plataforma: string[];
  descripcion: string;
  mecanicas_principales: string[];
  tecnologias: string[];
  assets: string[];
  publico_objetivo: string;
  estado: 'desarrollo' | 'completado' | 'pausado';
}

// Tipos de unión para todos los tipos de proyectos
export type ProjectType = ProjectDev | ProjectAnalytics | ProjectGames;