class Car {

    brand: String;
    doors: number;
    fueltank: number;
    isRunning: boolean;
    type: string;
    createdAt: number;

    constructor( brand:string, type:string ) {
        this.brand = brand;
        this.doors = 0;
        this.fueltank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 123456789;
    }

    turnOn() {
        if (this.isRunning) {
            console.log('El carro ya estaba encendido...se danio el motor')
            return;
        }
        if (this.fueltank <= 0) {
            console.log('El carro no tine gasolina')
            return;
        }
        this.isRunning = true;
        console.log('El carro esta encendido');

    }
    /*  gas: number
    gas > 100, this.fulltank =100
    gas tiene que ser positivo
    si ya esta lleno, no sobre llenar 
    si el tanque es 50 y aniado 20, el valor del fueltank seria 70
    si fueltank es de 90, y aniado 50, fueltank deberia de ser 100
    */

    fillTank(gas: number) {
        if (gas <= 0) {
            console.log('el gas tiene que ser positivo')
            return;
        }
        let newFuelTank = this.fueltank + gas;
        if (newFuelTank >= 100) {
            newFuelTank = 100;
        }
        this.fueltank = newFuelTank;
    }
}

let myMazda = new Car('Mazda','Sedan');
console.log(myMazda)
myMazda.fillTank(60);
myMazda.fillTank(10);
myMazda.turnOn();
console.log(myMazda);