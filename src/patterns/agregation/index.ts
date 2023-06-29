class Weapon {
    constructor(public bullet: Bullet, public name: string) {}
}

class Bullet {
    constructor(public calibre: number) {}
}

class Person {
    constructor(public weapon: Weapon, public name: string) {}

    public shoot() {
        console.log(
            `${this.name}, shot the weapon ${this.weapon.name}, wich has calibre of ${this.weapon.bullet.calibre}`
        );
    }
}

const bullet = new Bullet(2);
const weapon = new Weapon(bullet, 'M4');
export const giga = new Person(weapon, 'Giga');
