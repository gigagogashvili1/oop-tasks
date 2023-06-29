interface PlayableOnPC {
    playOnPc(): void;
}
interface PlayableOnConsole {
    playOnConsole(): void;
}
interface PlayableOnPhone {
    playOnPhone(): void;
}

class ForzaHorizon implements PlayableOnPC, PlayableOnConsole {
    playOnPc(): void {
        console.log('Playing in the PC :)');
    }
    playOnConsole(): void {
        console.log('Playing in the Console :)');
    }
}
class Fifa implements PlayableOnPC, PlayableOnConsole, PlayableOnPhone {
    playOnPhone(): void {
        console.log('Playing in the phone');
    }
    playOnPc(): void {
        console.log('Playing in the PC :)');
    }
    playOnConsole(): void {
        console.log('Playing in the Console :)');
    }
}

const forzaHorizon = new ForzaHorizon();
forzaHorizon.playOnConsole();
forzaHorizon.playOnPc();

const fifa = new Fifa();
fifa.playOnConsole();
fifa.playOnPc();
fifa.playOnPhone();
