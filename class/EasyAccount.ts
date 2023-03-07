import { DioAccount } from "./DioAccount";

export class EasyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(value: number): void {
    this.deposit(value + 10);
  }
}
