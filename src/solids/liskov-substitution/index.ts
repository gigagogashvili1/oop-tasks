export abstract class EDMGenre {
    constructor(protected genre: string) {}
    public abstract playEdmMusic(): void;
}

export class HouseGenre extends EDMGenre {
    private style: string;
    constructor(public genre: string, style: string) {
        super(genre);
        this.style = style;
    }
    public playEdmMusic(): void {
        console.log(`playing ${this.genre}, it's so ${this.style} type of music`);
    }
}

export class TechnoGenre extends EDMGenre {
    private style: string;
    private commonTempo: number;
    constructor(public genre: string, style: string, commonTempo: number) {
        super(genre);
        this.style = style;
        this.commonTempo = commonTempo;
    }
    public playEdmMusic(): void {
        console.log(
            `playing ${this.genre}, it's so ${this.style} type of music, it's commonly ${this.commonTempo} tempo`
        );
    }
}

export class FutureRaveGenre extends EDMGenre {
    constructor(public genre: string) {
        super(genre);
    }
    public playEdmMusic(): void {
        console.log(`playing ${this.genre} music`);
    }
}
function playMusics(genres: EDMGenre[]) {
    genres.forEach((genre) => {
        genre.playEdmMusic();
    });
}

const genres = [
    new HouseGenre('Progressive House', 'Aggressive'),
    new HouseGenre('Deep House', 'Chill'),
    new TechnoGenre('Melodic Techno', 'Deep', 125),
    new TechnoGenre('Hard Techno', 'Aggressive', 160),
    new FutureRaveGenre('Future Rave'),
];

playMusics(genres);
