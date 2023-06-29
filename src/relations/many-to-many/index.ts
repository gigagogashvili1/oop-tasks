class Game {
    public engines: Enginee[] = [];
    constructor(public gameTitle: string) {}

    public printInformations() {
        this.engines.forEach((engine) => {
            console.log(engine.engineTitle);
        });
    }
}
class Enginee {
    public games: Game[] = [];
    constructor(public engineTitle: string) {}

    public addNewGame(game: Game, engine: Enginee) {
        this.games?.push(game);
        game.engines.push(engine);
    }
}

const unrealEngine = new Enginee('Unreal Engine');
unrealEngine.addNewGame(new Game('fortnite'), unrealEngine);
