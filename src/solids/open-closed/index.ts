interface ICoffeMaker {
    prepareCoffe(): void;
}

class BasicCoffeMaker implements ICoffeMaker {
    constructor(private coffePreparation: CoffeePreparation) {}

    prepareCoffe(): void {
        this.coffePreparation.prepareGlass();
        this.coffePreparation.addCoffe();
        this.coffePreparation.addSugar();
        this.coffePreparation.pourWater();
    }
}

class CappucinoCoffeMaker implements ICoffeMaker {
    constructor(private coffePreparation: CoffeePreparation) {}
    prepareCoffe(): void {
        this.coffePreparation.prepareGlass();
        this.coffePreparation.addCoffe();
        this.coffePreparation.addSugar();
        this.coffePreparation.pourWater();
        this.addMilk();
    }

    addMilk(): void {
        console.log('Added milk');
    }
}

class CoffeePreparation {
    public prepareGlass(): void {
        console.log('Washed glass and prepared it');
    }

    public addCoffe(): void {
        console.log('Added 2 spoons of coffee');
    }

    public addSugar(): void {
        console.log('Added 3 spoons of sugar');
    }

    public pourWater(): void {
        console.log('Poured water');
    }
}
