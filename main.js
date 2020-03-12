import Paciente from "./paciente.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import PacienteAsegurado from "./pacienteA.js";

class Main {
  constructor() {
    let fecha = {
      dia: 16,
      mes: 11,
      año: 2021
    };
    let datosPaciente = {
      nombre: this.nombre.getNombreCompleto(),
      fecha: this.fecha.getFecha(),
      telefono: 313 - 191 - 2815
    };
    let datosSeguro = {
      numeroPoliza: 123456789,
      finVigencia: this.fecha,
      compañia: "Seguros Mortales"
    };
    this.fecha = new Fecha(fecha);
    this.nombre = new Nombre("Juan", "Rodriguez", "Perez");
    this.paciente = new Paciente(datosPaciente);
    this.pacienteA = new PacienteAsegurado(datosPaciente, datosSeguro);
  }

  testNombre() {
    console.log(this.nombre.getNombreCompleto());
  }
  testFechas() {
    console.log(this.fecha.getFecha());
  }
  testPaciente() {
    console.log(this.paciente.getPerfil());
  }
  testPacienteA() {
    console.log(this.pacienteA.getPerfil());
  }
}

let tester = new Main();
tester.testPaciente();
