class Locutor {
    constructor (nombre, verbo = "dice"){
        this.nombre = nombre;
        this.verbo = verbo;
    }
    dice (texto) {
        console.log(this.nombre + " " + this.verbo + " '" + texto + "'");

    }
}

class Feriante extends Locutor {
    constructor (nombre) {
        super(nombre, "grita");
    }

    dice (texto) {
        //let mayus = texto.toUpperCase();
        //console.log(this.nombre + " " + this.verbo + " '" + mayus + "'");
        super.dice(texto.toUpperCase());
    }
}

const fer1 = new Feriante ("Mr. Crecepelo");
fer1.dice("Me lo quitan de las manos");
