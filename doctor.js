import Nombre from "./nombre.js";

export default class Doctor {
  /**
   *
   * @param {string} especialidad
   * @param {number} telefono
   * @param {number} cedula
   */
  constructor(nombre, especialidad, telefono, cedula) {
    this._nombre = nombre;
    this._esp = especialidad;
    this._telefono = telefono;
    this._cedula = cedula;
  }
  getId() {
    return `-${this._nombre.getNombreCompleto()}
-${this._esp}
-${this._telefono}
-${this._cedula}`;
  }
}