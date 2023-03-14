export class User {
  idx: number
  name: string
  id: string
  email: string

  constructor(idx:number, name: string, id: string, email: string){
    this.idx = idx;
    this.name = name;
    this.id = id;
    this.email = email;
  }
}