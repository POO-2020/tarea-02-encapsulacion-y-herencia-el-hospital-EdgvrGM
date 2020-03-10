import Nombre from "./nombre.js";
import Fecha from "./fecha.js";

export default class Paciente {
 /**
  * 
  * @param {string} nombre 
  * @param {number} fecha 
  * @param {number} telefono 
  */
  constructor(nombre, fecha, telefono) {
    this._nombre = nombre
    this._fechaNacimiento = fecha
    this._telefono = telefono;
  }
  getPerfil() {
    return `-${this._nombre.getNombreCompleto()}
-${this._fechaNacimiento.getFecha()}
-${this._telefono}`;
  }
}