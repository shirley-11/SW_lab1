class Punto {

    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    suma (p1) {
        let nuevaequis = p1.x + this.x;
        let nuevay = p1.y + this.y;
        return new Punto(nuevaequis, nuevay);
    }
    //console.log(new Punto(1,2).suma(new Punto(2,1)))

    static suma (p1, p2){
        let nuevaequis= p1.x + p2.x;
        let nuevay = p1.y + p2.y;
        return new Punto(nuevaequis, nuevay);
    }
    
}

console.log(Punto.suma(new Punto(1, 2), new Punto(2, 1)));

