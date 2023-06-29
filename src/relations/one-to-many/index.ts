class Game {
    constructor(public gameTitle: string, public engine: Enginee) {}

    public printEngineInformation() {
        console.log(`${this.gameTitle} is using ${this.engine.engineTitle}`);
    }
}
class Enginee {
    public games: Game[] = [];
    constructor(public engineTitle: string) {}

    public addNewGame(gameTitle: string) {
        this.games?.push(new Game(gameTitle, this));
    }
}

const unrealEngine = new Enginee('Unreal Engine');
unrealEngine.addNewGame('fortnite');
