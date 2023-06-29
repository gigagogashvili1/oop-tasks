abstract class Dog {
    public breed: string;

    constructor(breed: string) {
        this.breed = breed;
    }

    public bark() {
        console.log(`Dog breed, ${this.breed} is barking`);
    }

    public abstract warpTail(): void;
}

export class Bulldog extends Dog {
    constructor() {
        super('bulldog');
    }
    public warpTail(): void {
        console.log('Dog is warping tail actively');
    }
}

export class Poodle extends Dog {
    constructor() {
        super('poodle');
    }
    public warpTail(): void {
        console.log('Dog is warping tail passively');
    }
}

export class DogsShelter {
    private allowedDogs: string[] = ['bulldog', 'poodle'];
    private _dogs: Dog[] = [];

    constructor(dogs: Dog[]) {
        dogs.forEach((dog) => {
            if (this.allowedDogs.includes(dog.breed)) {
                this._dogs.push(dog);
            }
        });
    }

    public get dogs(): Dog[] {
        return this._dogs;
    }
}

const bulldog = new Bulldog();
const poodle = new Poodle();

const shelter = new DogsShelter([bulldog, poodle]);
shelter.dogs.forEach((dog) => {
    dog.bark();
    dog.warpTail();
});
