type paramType = string | number | number[];

// Static Compile time Polymorphism
export class Operations {
    public static add(x: string, y: string): string;
    public static add(x: number, y: number): number;
    public static add(x: number[], y: number[]): number[];
    public static add(x: paramType, y: paramType) {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y;
        }
        if (typeof x === 'number' && typeof y === 'number') {
            return x + y;
        }
        if (Array.isArray(x) && Array.isArray(y)) {
            return x.concat(y);
        }
    }
}
