export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string[];
  location?: string;
  highlights?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export const cvData = {
  name: "Bruno Tecay",
  title: "Contador Público Nacional  Especialista Dirección de RRHH",
  profile: "Profesional con gran experiencia y excelentes dotes de gestión y dirección. Cuento con conocimientos especializados para optimizar procesos, reducir costes y maximizar la rentabilidad. Destaco por mi capacidad de liderazgo para sacar lo mejor de cada empleado.",
  contact: {
    address: "Entre Rios 777 - Piso 3 Dpto. A, Tucumán",
    phone: "381-5023653",
    whatsapp: "5493815023653", // Formato internacional sin símbolos
    email: "brunotecay@hotmail.com",
    nationality: "Argentino",
    dni: "32.322.131",
    status: "Soltero"
  },
  aptitudes: [
    "Manejo de personal",
    "Resolución de problemas",
    "Liderazgo y gestión de equipos",
    "Pensamiento analítico",
    "Dirección de equipos",
    "Técnicas de negociación",
    "Auditorías internas",
    "Toma de decisiones"
  ],
  education: [
    {
      degree: "CONTADOR PUBLICO NACIONAL",
      institution: "Facultad de Ciencias Económicas - Universidad Nacional de Tucumán",
      period: "01/2015"
    },
    {
      degree: "ESPECIALIZACION EN DIRECCION DE RRHH",
      institution: "Facultad de Ciencias Económicas - Universidad Nacional de Tucumán",
      period: "01/2018 - 01/2019",
      details: "Finalizado el cursado de la carrera especialización en Dirección de RRHH. Falta presentación de Tesis Final."
    },
    {
      degree: "Secundaria Perito Mercantil",
      institution: "Instituto Privado Tucumán",
      period: ""
    }
  ],
  languages: [
    {
      language: "Idioma Inglés",
      institution: "ATICANA",
      details: "Título recibido en ATICANA."
    }
  ],
  experience: [
    {
      id: "hilado",
      company: "HILADO S.A.",
      position: "Jefe de Administración y Personal",
      period: "10/2019 - Actual",
      duration: "6 años y 6 meses",
      description: [
        "Planificar, dirigir y controlar operaciones de Administración, Solicitudes de fondos y circuito de pago a proveedores.",
        "Presupuestos, análisis financiero y ejecución. Reportes al Directorio.",
        "Liquidación de impuestos provinciales y municipales.",
        "Control de liquidación de haberes de plantas Tucumán.",
        "Negociación con Gremio. Atención al personal, resolución de conflictos.",
        "Personal a cargo: Oficina de personal (Ambas plantas), Oficina de Sistemas, Almacén y Portería."
      ],
      location: "Empresa Textil - Ruta N 304 KM 10"
    },
    {
      id: "argenti",
      company: "Argenti Lemon S.A.",
      position: "Encargado de Gestión de RRHH y Terceros",
      period: "05/2015 - 09/2019",
      duration: "4 años y 5 meses",
      description: [
        "Realizo el control de liquidación de haberes de diferentes empresas del grupo (Citrus, Comercio, UATRE y fuera de convenio, entre otros).",
        "Control de Presentismo, carga de novedades, liquidación y acreditaciones.",
        "Confección de F931 y control de asiento contable exportado desde sistema de liquidación GESPER a Sistema Contable.",
        "Control de jornales de contratistas de cosecha, control de liquidación y autorización de pagos quincenales.",
        "Presupuesto de mano de obra de diferentes sectores productivos del grupo (Industria, fincas, administración, etc.).",
        "Seguimiento y análisis de desvíos. Control y seguimiento de los gastos inherentes al área."
      ],
      location: "Empresa Citrícola - Ruta N 302 KM 8"
    },
    {
      id: "gasnor",
      company: "GASNOR S.A.",
      position: "Administrativo Finanzas - Auxiliar RRHH",
      period: "09/2012 - 04/2015",
      duration: "2 años y 8 meses",
      description: [
        "Ingreso al sector de FINANZAS a realizar tareas de control y registración de recaudaciones por el cobro de facturas de diferentes entes (Rapipago, Pago Fácil, Bancos, etc.).",
        "Arqueos de caja. Análisis de cuentas contables y, conciliaciones bancarias.",
        "En enero de 2014 fui transferido al área de RRHH realizando: Carga de Novedades, Liquidación de haberes, Acreditaciones de Haberes, Asiento contable de la liquidación y Confección y pago de F.931."
      ]
    },
    {
      id: "herrera",
      company: "ESTUDIO HERRERA",
      position: "Administrativo Contable / Impositivo",
      period: "06/2011 - 04/2015",
      duration: "3 años y 11 meses",
      description: [
        "Liquidación de impuestos Nacionales, Provinciales y Municipales.",
        "Registraciones contables de diferentes empresas, libro diario, mayor y confección de balances.",
        "Liquidación de haberes de diferentes convenios (comercio, construcción, metalúrgicos, etc.).",
        "Confección de F931 y cuotas sindicales. Tareas y trámites administrativos varios."
      ]
    },
    {
      id: "obatown",
      company: "OBATOWN COMPANY",
      position: "Administrativo oficina personal",
      period: "09/2010 - 04/2011",
      duration: "8 meses",
      description: [
        "Ingreso al área de personal como asistente del jefe de personal.",
        "Carga de novedades, control de ausentismo, altas y bajas de AFIP.",
        "Confección de informes a la gerencia y tareas administrativas varias."
      ],
      location: "Empresa Metalúrgica"
    }
  ]
};
