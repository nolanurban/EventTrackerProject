import { Daily } from "./daily";

export class User {

  id: number;
  username: string;
  password: string;
  daily: any[];

  constructor(
    id: number = 0,
    username: string = '',
    password: string = '',
    daily: Daily[] = []
    ) {
  this.id = id;
  this.username = username;
  this.password = password;
  this.daily = daily;
    }
}
