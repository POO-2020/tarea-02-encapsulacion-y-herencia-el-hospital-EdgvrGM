import Fecha from "./fecha.js/index.js";
import Tiempo from "./tiempo.js/index.js";
import Nombre from "./nombre.js/index.js";
import Doctor from "./doctor.js/index.js";
import Paciente from "./paciente.js/index.js";

export default class Cita {
  constructor(fecha, hora, doctor, paciente) {
    this._fecha = fecha;
    this._hora = hora;
    this._doctor = doctor;
    this._paciente = paciente;
  }
  getCita() {
    return `-${this._fecha}
-${this._hora}
-${this._doctor}
-${this._paciente}`;
  }
}