export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit(value: number): void {
    if (value > 0 && this.validateStatus()) {
      this.balance += value;
    }
  }

  withdraw(value: number): void {
    if (this.balance >= value && this.validateStatus()) {
      this.balance -= value;
    }
    console.log("Você sacou");
  }

  getBalance(): void {
    console.log("Seu saldo é: " + this.balance);
  }

  private validateStatus(): boolean {
    if (this.status === true) {
      return this.status;
    }

    throw new Error();
  }
}
