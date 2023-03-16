export class User {
  idx: number
  id: string
  password: string
  name: string
  phoneNumber: string
  email: string
  age: number

  constructor(idx:number, id: string, password: string, name: string, phoneNumber: string, email: string, age: number){
    this.idx = idx;
    this.id = id;
    this.password = password;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.age = age;
  }
}