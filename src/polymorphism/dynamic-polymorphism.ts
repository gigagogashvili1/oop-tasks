abstract class Vehicle {
    constructor(protected speed: number, protected weight: number) {}
    protected abstract timeToCoverKm(distance: number): string;
}
export class Car extends Vehicle {
    constructor(speed: number, weight: number, public hasTurbine: boolean) {
        super(speed, weight);
    }
    public timeToCoverKm(distance: number): string {
        // Dummy logics
        const hours = distance / this.speed;
        const minutes = (hours % 1) * 60;
        const formattedTime = `${Math.floor(hours)} hours ${Math.round(minutes)} minutes`;

        if (this.hasTurbine) {
            const additionalSpeed = Math.floor(this.weight / this.speed);
            this.speed += additionalSpeed;
        }
        return formattedTime;
    }
}
export class Motorcycle extends Vehicle {
    constructor(speed: number, weight: number, public CC: number) {
        super(speed, weight);
    }
    public timeToCoverKm(distance: number): string {
        // Dummy logics
        const additionalSpeed = Math.floor(this.weight / this.speed) * this.CC;
        this.speed += additionalSpeed;
        const hours = distance / this.speed;
        const minutes = (hours % 1) * 60;
        const formattedTime = `${Math.floor(hours)} hours ${Math.round(minutes)} minutes`;

        return formattedTime;
    }
}
