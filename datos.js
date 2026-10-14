// ============================================
//  DATOS DE LA BITÁCORA
//  Edita aquí los docentes, grupos y horarios
// ============================================

const HORARIOS = [
  "14:10 - 14:50",
  "14:50 - 15:30",
  "15:30 - 16:10",
  "16:10 - 16:50",
  "17:20 - 18:00",
  "18:00 - 18:40",
  "18:40 - 19:20",
  "19:20 - 20:00"
];

const DIAS = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];

// Docentes con todos sus grupos/horarios
const DOCENTES = {
  "LIC. ISIDRO CHIRINO": [
    { grupo: "1E", aula: "Aula 20", dias: ["LUNES","MIÉRCOLES","VIERNES"], horarios: ["14:10 - 14:50"] },
    { grupo: "1F", aula: "Aula 20", dias: ["LUNES"], horarios: ["14:50 - 15:30"] },
    { grupo: "1B", aula: "Aula 21", dias: ["MIÉRCOLES"], horarios: ["14:10 - 14:50"] },
    { grupo: "1D", aula: "Aula 20", dias: ["MIÉRCOLES","JUEVES"], horarios: ["14:10 - 14:50","18:40 - 19:20"] },
    { grupo: "1F", aula: "Aula 20", dias: ["JUEVES"], horarios: ["15:30 - 16:10"] },
    { grupo: "1E", aula: "Aula 21", dias: ["JUEVES"], horarios: ["17:20 - 18:00"] }
  ],
  "LIC. ANDRE ALEJANDRA LOPEZ HERNÁNDEZ": [
    { grupo: "3B", aula: "AV GRANDE", dias: ["LUNES","MIÉRCOLES","JUEVES","VIERNES"], horarios: ["14:10 - 14:50","17:20 - 18:00","18:00 - 18:40","16:10 - 16:50"] },
    { grupo: "3D", aula: "AV GRANDE", dias: ["LUNES","JUEVES"], horarios: ["14:10 - 14:50","15:30 - 16:10"] },
    { grupo: "3C", aula: "AV GRANDE", dias: ["LUNES","MIÉRCOLES","VIERNES"], horarios: ["14:10 - 14:50","15:30 - 16:10","19:20 - 20:00"] },
    { grupo: "3A", aula: "AV GRANDE", dias: ["LUNES","MARTES","VIERNES"], horarios: ["14:10 - 14:50","16:10 - 16:50"] },
    { grupo: "3E", aula: "AV GRANDE", dias: ["JUEVES","VIERNES"], horarios: ["14:50 - 15:30","17:20 - 18:00","18:40 - 19:20"] },
    { grupo: "1G", aula: "AV GRANDE", dias: ["MARTES","MIÉRCOLES","JUEVES"], horarios: ["15:30 - 16:10","16:10 - 16:50","17:20 - 18:00"] },
    { grupo: "5B", aula: "AV GRANDE", dias: ["VIERNES"], horarios: ["16:10 - 16:50","17:20 - 18:00"] }
  ],
  "LIC. JOSE AGUSTIN RUIZ VILLATORO": [
    { grupo: "5E", aula: "Aula 21", dias: ["LUNES"], horarios: ["14:10 - 14:50"] },
    { grupo: "5F", aula: "Aula 21", dias: ["MIÉRCOLES"], horarios: ["14:10 - 14:50"] }
  ],
  "LUIS IGNACIO GORDILLO": [
    { grupo: "3B", aula: "Aula 20", dias: ["MARTES","MIÉRCOLES"], horarios: ["14:50 - 15:30","17:20 - 18:00"] },
    { grupo: "3C", aula: "Aula 21", dias: ["MIÉRCOLES"], horarios: ["17:20 - 18:00"] }
  ]
};

const AULAS = ["Aula 20", "Aula 21", "AV GRANDE"];