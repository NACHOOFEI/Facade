class Vuelo {
  private marca: string;
  private lugar: string;

  constructor(marca: string, lugar: string) {
    this.marca = marca;
    this.lugar = lugar;
  }
  hacer(): void {
    console.log(
      `tu vuelo con la aerolinia ${this.marca} con destino a ${this.lugar}`
    );
  }
}

class hotel {
  private nombre: string;
  private ubicacion: string;
  private personas: number;

  constructor(nombre: string, ubicacion: string, personas: number) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.personas = personas;
  }
}
