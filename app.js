let semanaOffset = 0;

// Devuelve el lunes de la semana según offset
function obtenerLunes(offset = 0) {
  const hoy = new Date();
  const dia = hoy.getDay(); // 0=domingo
  const diff = hoy.getDate() - dia + (dia === 0 ? -6 : 1);
  const lunes = new Date(hoy.setDate(diff));
  lunes.setDate(lunes.getDate() + offset * 7);
  return lunes;
}

function formatearFecha(fecha) {
  const dias = ["DOM","LUN","MAR","MIÉ","JUE","VIE","SÁB"];
  const meses = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];
  return `${dias[fecha.getDay()]} ${fecha.getDate()} ${meses[fecha.getMonth()]}`;
}

function renderTabla() {
  const lunes = obtenerLunes(semanaOffset);
  const diasSemana = [];
  for (let i = 0; i < 5; i++) {
    const d = new Date(lunes);
    d.setDate(lunes.getDate() + i);
    diasSemana.push(d);
  }
  document.getElementById("rangoSemana").textContent =
    `${formatearFecha(diasSemana[0])} - ${formatearFecha(diasSemana[4])}`;

  const tabla = document.getElementById("tablaHorario");
  let html = "<thead><tr><th>HORARIO</th>";
  diasSemana.forEach(d => {
    const esHoy = d.toDateString() === new Date().toDateString();
    html += `<th class="${esHoy ? 'hoy' : ''}">${DIAS[d.getDay()-1]}<br><small>${d.getDate()} OCT</small></th>`;
  });
  html += "</tr></thead><tbody>";

  HORARIOS.forEach(hora => {
    html += `<tr><td class="hora">${hora}</td>`;
    diasSemana.forEach(fecha => {
      const diaNombre = DIAS[fecha.getDay()-1];
      html += `<td>${renderCelda(hora, diaNombre, fecha)}</td>`;
    });
    html += "</tr>";
  });

  html += "</tbody>";
  tabla.innerHTML = html;
}

function renderCelda(hora, dia, fecha) {
  // Buscar todas las clases en ese día+hora
  let tarjetas = "";
  let ocupadas = [];

  Object.entries(DOCENTES).forEach(([docente, clases]) => {
    clases.forEach(c => {
      if (c.dias.includes(dia) && c.horarios.includes(hora)) {
        ocupadas.push(c.aula);
        tarjetas += `
          <div class="tarjeta" data-docente="${docente}">
            <div class="tarjeta-header">🔒 ${docente}</div>
            <div class="tarjeta-info">${c.grupo} - ${c.aula}</div>
            <div class="tarjeta-equipo">📹 🔊</div>
          </div>`;
      }
    });
  });

  // Aulas libres
  const libres = AULAS.filter(a => !ocupadas.includes(a));
  if (libres.length) {
    tarjetas += `<div class="libres">🟢 Libres: ${libres.join(", ")}</div>`;
  }

  if (!tarjetas) return `<div class="disponible">Disponible</div>`;
  return tarjetas;
}

// Navegación de semanas
document.getElementById("semanaAnterior").onclick = () => {
  semanaOffset--;
  renderTabla();
};
document.getElementById("semanaSiguiente").onclick = () => {
  semanaOffset++;
  renderTabla();
};

// Init
renderTabla();