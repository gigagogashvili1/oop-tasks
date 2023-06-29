class Player {
    constructor(public name: string, public lastName: string, public age: number) {}

    public playGame(game: string) {
        console.log(`${this.name} is playing ${game}`);
    }
}

class Game {
    public activePlayers: Player[] = [];

    constructor(public gameTitle: string) {}

    public addNewActivePlayer(player: Player) {
        this.activePlayers.push(player);
        player.playGame(this.gameTitle);
    }

    public activePlayersWhoArePlaying() {}
}

export const fortnite = new Game('Fortnite');
export const player = new Player('Giga', 'Gogashvili', 19);
