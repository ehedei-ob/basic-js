const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.seccion');
const imagenFantasma = document.querySelector('.imagen-fantasma');
const papelera = document.querySelector('.papelera');

parrafos.forEach((parrafo) => {
  parrafo.addEventListener('dragstart', (event) => {
    parrafo.classList.add('dragging');
    event.dataTransfer.setData('id', parrafo.id);
    event.dataTransfer.setDragImage(imagenFantasma, 0, 0);
  });

  parrafo.addEventListener('dragend', () => {
    parrafo.classList.remove('dragging');
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  });

  seccion.addEventListener('drop', (event) => {
    const id = event.dataTransfer.getData('id');
    const parrafo = document.getElementById(id);
    seccion.appendChild(parrafo);
  });
});

papelera.addEventListener('dragover', (event) => {
  event.preventDefault();
});

papelera.addEventListener('drop', (event) => {
  const id = event.dataTransfer.getData('id');
  const parrafo = document.getElementById(id);
  parrafo.remove();
});
