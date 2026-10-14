// ===== LOGIN =====
const USUARIO = "admin";
const PASSWORD = "prepa123";
let sesionActiva = false;

const modalLogin = document.getElementById("modalLogin");
const modalReservar = document.getElementById("modalReservar");

document.getElementById("btnReservar").onclick = () => {
  if (sesionActiva) {
    abrirModalReservar();
  } else {
    modalLogin.classList.remove("oculto");
  }
};

document.getElementById("btnEntrar").onclick = () => {
  const u = document.getElementById("usuario").value.trim();
  const p = document.getElementById("password").value;
  if (u === USUARIO && p === PASSWORD) {
    sesionActiva = true;
    modalLogin.classList.add("oculto");
    abrirModalReservar();
  } else {
    document.getElementById("errorLogin").classList.remove("oculto");
  }
};

document.getElementById("btnVolver").onclick = () => modalLogin.classList.add("oculto");
document.getElementById("verPass").onclick = () => {
  const inp = document.getElementById("password");
  inp.type = inp.type === "password" ? "text" : "password";
};

// ===== NOTAS =====
const blocNotas = document.getElementById("blocNotas");
const notasTexto = document.getElementById("notasTexto");

document.getElementById("btnNotas").onclick = () => {
  blocNotas.classList.toggle("oculto");
};
document.getElementById("cerrarNotas").onclick = () => blocNotas.classList.add("oculto");

notasTexto.value = localStorage.getItem("notasAdmin") || "";
notasTexto.oninput = () => localStorage.setItem("notasAdmin", notasTexto.value);

// ===== AGENDAR =====
function abrirModalReservar() {
  // Cargar horarios
  const selHorario = document.getElementById("horarioReserva");
  selHorario.innerHTML = HORARIOS.map(h => `<option>${h}</option>`).join("");

  // Cargar aulas
  const selAula = document.getElementById("aulaReserva");
  selAula.innerHTML = AULAS.map(a => `<option>${a}</option>`).join("");

  // Cargar docentes en datalist
  const dl = document.getElementById("listaDocentes");
  dl.innerHTML = Object.keys(DOCENTES).map(d => `<option value="${d}">`).join("");

  // Fecha por defecto = hoy
  document.getElementById("fechaReserva").valueAsDate = new Date();

  // Cuando cambia el docente, actualizar grupos
  const inputDocente = document.getElementById("docenteReserva");
  inputDocente.oninput = () => {
    const nombre = inputDocente.value.toUpperCase();
    const selGrupo = document.getElementById("grupoReserva");
    selGrupo.innerHTML = "";
    const clases = DOCENTES[nombre];
    if (clases) {
      clases.forEach(c => {
        selGrupo.innerHTML += `<option value="${c.grupo}">${c.grupo} - ${c.aula}</option>`;
      });
    }
  };

  modalReservar.classList.remove("oculto");
}

document.getElementById("cancelarReserva").onclick = () => modalReservar.classList.add("oculto");
document.getElementById("guardarReserva").onclick = () => {
  // Aquí puedes guardar la reserva en localStorage
  alert("Préstamo guardado (demo)");
  modalReservar.classList.add("oculto");
};

// Botón salir
document.getElementById("btnSalir").onclick = () => {
  sesionActiva = false;
  alert("Sesión cerrada");
};