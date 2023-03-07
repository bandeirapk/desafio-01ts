import { DioAccount } from "./class/DioAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { EasyAccount } from "./class/EasyAccount";

const personAccount: DioAccount = new PeopleAccount(1, "Bandeira", 9900);
const companyAccount: DioAccount = new CompanyAccount("DIO", 8181);
const easyAccount: DioAccount = new EasyAccount("Roberto", 3585);
