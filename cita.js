import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Paciente from "./paciente.js";

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