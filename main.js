import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Cita from "./cita.js";
import Tiempo from "./tiempo.js";
import Hospital from "./hospital.js";
import PacienteAsegurado from "./pacienteA.js";

class Main {
  //${this.}

  constructor() {
    this.testNombre1 = new Nombre("Roberto", "Rolon", "Rodrigo");
    this.testNombre2 = new Nombre("Mister", "Super", "Man");
    this.testTiempo = new Tiempo(3, 35, "pm");

    let datosPaciente = {
      nombre: this.testNombre1,
      fechaNacimiento: new Fecha(new Date(2002, 5, 20)),
      telefono: "313-191-1815"
    };
    let datosPacienteAsegurado = {
      nombre: new Nombre("Edgar", "Gonzalez", "Montelongo"),
      fechaNacimiento: new Fecha(new Date(2000, 2, 16)),
      telefono: "313-191-1815",
      numeroPoliza: 1578,
      fechaFinVigencia: new Fecha(new Date(2015, 4, 5)),
      compañia: "Telcel"
    };
    let datosDoct = {
      nombre: this.testNombre2,
      especialidad: "Coronavirus",
      telefono: "312-457-3641",
      cedula: "105413587"
    };
    let datosHospital = {
      nombre: "IMSS",
      direccion: "Miguel de la Madrid, Num #674"
    };
    this.testHosp = new Hospital(datosHospital);
    this.paciente = new Paciente(datosPaciente);
    this.testDoct = new Doctor(datosDoct);
    this.pacienteAsegurado = new PacienteAsegurado(datosPacienteAsegurado);

    let datosCita = {
      fecha: new Fecha(new Date(2002, 5, 20)),
      hora: this.testTiempo,
      doctor: this.testDoct,
      paciente: this.paciente
    };

    this.testCitaa = new Cita(datosCita);
  }

  testNombre() {
    console.log(this.testNombre1.getNombreCompleto());
    console.log(this.testNombre1.getApellidoNombre());
    console.log(this.testNombre1.getIniciales());
  }

  testDoc() {
    console.log(this.testDoct.getPerfil());
  }

  testPac() {
    console.log(this.paciente.getPerfil());
    //testPaciente Asegurado
    console.log(this.pacienteAsegurado.getPerfil());
  }
  testCita() {
    console.log(this.testCitaa.getCita());
  }

  testHospital() {
    //test 1
    console.log(this.testHosp.buscarDoctor(this.testDoct));
    console.log(this.testHosp.buscarCita(this.testCitaa));
    console.log(this.testHosp.eliminarDoctor(this.testDoct));
    console.log(this.testHosp.eliminarCita(this.testCitaa));

    this.testHosp.registrarDoctor(this.testDoct);
    this.testHosp.registrarCita(this.testCitaa);

    //test 2
    console.log(this.testHosp.buscarDoctor(this.testDoct));
    console.log(this.testHosp.buscarCita(this.testCitaa));
    console.log(this.testHosp.eliminarDoctor(this.testDoct));
    console.log(this.testHosp.eliminarCita(this.testCitaa));

    this.testHosp.listarDoctores();
    this.testHosp.listarCitas();

    //test 3
    console.log(this.testHosp.registrarDoctor(this.testDoct));
    console.log(this.testHosp.registrarCita(this.testCitaa));
    console.log(this.testHosp.registrarDoctor(this.testDoct));
    console.log(this.testHosp.registrarCita(this.testCitaa));

    console.log(this.testHosp.modificarDoctor(this.testDoct, this.testDoct));
    console.log(this.testHosp.modificarCita(this.testCitaa, this.testCitaa));
    this.testHosp.listarDoctores();
    this.testHosp.listarCitas();
  }
}

let test = new Main();
test.testNombre();
test.testDoc();
test.testPac();
test.testCita();
test.testHospital();
