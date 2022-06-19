import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  private subId!: string;

  constructor() {
    let sub_id = localStorage.getItem("sub_id");

    if (sub_id !== null) {
      this.subId = sub_id;
      return;
    }

    let r = (Math.random() + 1).toString(36).substring(7);
    localStorage.setItem("sub_id", r);
  }

  getSubId() {
    return this.subId;
  }

}
