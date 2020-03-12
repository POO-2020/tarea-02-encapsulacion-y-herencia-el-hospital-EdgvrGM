import Paciente from "./paciente.js";

export default class PacienteAsegurado extends Paciente {
  constructor({nombre, fecha, telefono, numeroPoliza, finVigencia, compañia}) {
    super({nombre, fecha, telefono});
    this._numP = numeroPoliza;
    this._finVig = finVigencia;
    this._comp = compañia;
  }

  getPerfil() {
    return `${super.getPerfil()}, ${this._numP}, ${this._finVig}, ${this._comp}`;
  }
}
