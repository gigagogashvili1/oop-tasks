// It's single responisbility, cause every component of car is responsible for one thing.
//  Car class is responsible for only name, CarPainter's main job is to set the color on the car,
// and enginecreator is responsible to create engine.

class Car {
    public color?: string;
    public engine?: Engine;
    constructor(public name: string) {}
}

class CarPainter {
    public static paint(car: Car, color: string) {
        car.color = color;
        return `Car painted with ${color}`;
    }
}

class Engine {
    constructor(public engine: number) {}
}

class EngineCreator {
    public static makeEngine(engine: number) {
        return new Engine(engine);
    }
}

const bmw = new Car('BMW');
CarPainter.paint(bmw, 'Green');
const engine = EngineCreator.makeEngine(5.5);
bmw.engine = engine;
console.log(bmw);
