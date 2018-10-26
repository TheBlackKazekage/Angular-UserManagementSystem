export interface IUser {
  id?: number;
  first_name?: string;
  last_name?: string;
  avatar?: any;
  job?: string;
}

export class User {
  constructor(
    public id: number,
    public name: string,
    public job: string
  ) {}
}

export class Account {
  id?;
  constructor(
    public email: string,
    public password: string
  ) {}

}
