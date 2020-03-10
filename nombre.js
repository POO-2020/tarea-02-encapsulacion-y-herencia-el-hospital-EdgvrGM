export default class Nombre {
    /**
     *
     * @param {string} nombre
     * @param {string} apellidoPaterno
     * @param {string} apellidoMaterno
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno) {
      this._nombre = nombre;
      this._aP = apellidoPaterno;
      this._aM = apellidoMaterno;
    }
    getNombreCompleto() {
      return `${this._nombre} ${this._aP} ${this._aM}`;
    }
    getApellidoNombre() {
      return `${this._aP} ${this._aM} ${this._nombre}`;
    }
    getIniciales() {
      return `${this._nombre.charAt(0)}.${this._aP.charAt(0)}.${this._aM.charAt(0)}`;
    }
  }