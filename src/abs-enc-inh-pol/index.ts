abstract class Bank {
    protected name: string;
    protected releaseYear: number;
    private _annualIncome: number;

    constructor(name: string, releaseYear: number, annualIncome: number) {
        this.name = name;
        this.releaseYear = releaseYear;
        this._annualIncome = annualIncome;
    }

    protected abstract getBankInformation(): string;

    protected get annualIncome() {
        return this._annualIncome;
    }
}

export class BOG extends Bank {
    private employeesQuantity: number;

    constructor(name: string, releaseYear: number, employeesQuantity: number, annualIncome: number) {
        super(name, releaseYear, annualIncome);
        this.employeesQuantity = employeesQuantity;
    }

    public getEmployeesQuantity(): number {
        return this.employeesQuantity;
    }

    public setEmployeesQuantity(newEmployeesQuantity: number) {
        this.employeesQuantity += newEmployeesQuantity;
    }

    public getBankInformation(): string {
        return `
            ${this.name} has been released in ${this.releaseYear},
            it has ${this.annualIncome}$ income annualy, and also 
            has ${this.employeesQuantity} employee
        `;
    }
}
