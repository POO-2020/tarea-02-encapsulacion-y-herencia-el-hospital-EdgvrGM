import Nombre from "./nombre.js";
import Fecha from "./fecha.js";

export default class Paciente {
  /**
   *
   * @param {Nombre} nombre
   * @param {Fecha} fecha
   * @param {number} telefono
   */
  constructor({ nombre, fecha, telefono }) {
    this._nombre = nombre;
    this._fechaNacimiento = fecha;
    this._telefono = telefono;
  }
  getPerfil() {
    return `${this._nombre}, ${this._fechaNacimiento}, ${this._telefono}`;
  }
}
