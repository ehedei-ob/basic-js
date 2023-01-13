class Estudiante {
  asignaturas = ['JavaScript', 'HTML', 'CSS'];

  constructor(nombre = 'Nameless') {
    this.nombre = nombre;
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: [...this.asignaturas]
    };
  }
}

const estudiante = new Estudiante();
console.log(estudiante.obtenDatos());
