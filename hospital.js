export default class Hospital {
    constructor(nombre, direccion) {
      this._nombre = nombre;
      this._direccion = direccion;
      this._doctores = new Array();
      this._citas = new Array();
    }
  
    registrarDoctor(doctor) {
      this._doctores.push(doctor);
    }
    listarDoctores() {
      this._doctores.forEach((doctor, i) => {
        console.log(`(${i + 1}) ${doctor.getId()}`);
      });
    }
    registrarCita(cita) {
      this._citas.push(cita);
    }
    listarCitas() {
      this._citas.forEach((cita, i) => {
        console.log(`(${i + 1}) ${cita.getCita()}`);
      });
    }
  }