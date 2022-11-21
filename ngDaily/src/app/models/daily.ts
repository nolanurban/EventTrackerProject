import { Activity } from "./activity";
import { User } from "./user";

export class Daily {
  id: number;
  description: string | undefined;
  imageUrl: string | undefined;
  date: string | undefined;
  user: User;
  activity: Activity;

constructor(id: number = 0,
  description?: string ,
  imageUrl?: string ,
  date?: string,
  user?: any,
  activity?: any
) {
  this.id = id;
  this.description = description;
  this.imageUrl = imageUrl;
  this.date = date;
  this.user = user;
  this.activity = activity;
  }
}
