import { Injectable } from "@angular/core";

const LOGGEDINUSER = "LOGGEDINUSER";
const USERDATA = "USERDATA";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  constructor() {}

  setUserData(name: string, email: string, phone: number, city: string) {
    const loggedInUser = JSON.parse(sessionStorage.getItem(LOGGEDINUSER));
    const previousData = JSON.parse(sessionStorage.getItem(USERDATA));
    let currentData: Object;
    currentData = {
      [loggedInUser]: [{ name: name, email: email, phone: phone, city: city }],
    };

    if (previousData !== null) {
      if (previousData.hasOwnProperty(loggedInUser)) {
        previousData[loggedInUser] = [
          ...previousData[loggedInUser],
          { name: name, email: email, phone: phone, city: city },
        ];
        sessionStorage.setItem(USERDATA, JSON.stringify(previousData));
      } else {
        sessionStorage.setItem(
          USERDATA,
          JSON.stringify({ ...previousData, ...currentData })
        );
      }
    } else {
      sessionStorage.setItem(USERDATA, JSON.stringify({ ...currentData }));
    }
  }

  getUserData() {
    const loggedInUser = JSON.parse(sessionStorage.getItem(LOGGEDINUSER));
    const allData = JSON.parse(sessionStorage.getItem(USERDATA));
    if (allData)
      if (allData.hasOwnProperty(loggedInUser)) return allData[loggedInUser];
  }
}
