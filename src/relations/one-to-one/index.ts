// class Game {
//     constructor(public gameTitle: string, public engine: Enginee) {}

//     public printEngineInformation() {
//         console.log(`${this.gameTitle} is using ${this.engine.engineTitle}`);
//     }
// }
// class Enginee {
//     public game?: Game;
//     constructor(public engineTitle: string) {}

//     public createNewGame(gameTitle: string) {
//         this.game = new Game(gameTitle, this);
//     }
// }

// const unrealEngine = new Enginee('Unreal Engine');
// unrealEngine.createNewGame('fortnite');
// unrealEngine.game?.printEngineInformation();
