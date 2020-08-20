import { Injectable } from "@angular/core";

const USERS = "USERS";
const LOGGEDINUSER = "LOGGEDINUSER";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  registerUser(email: String, userName: String, password: String): boolean {
    let previousUsers = JSON.parse(sessionStorage.getItem(USERS));
    let currentUser = { email, userName, password };
    let updatedUsers = [];
    let userExists: boolean;

    if (previousUsers !== null) {
      updatedUsers.push(...previousUsers);
      previousUsers.forEach((element) => {
        if (element.userName === userName) {
          userExists = false;
        }
      });
      if (userExists === false) {
        return false;
      }
    }
    updatedUsers.push(currentUser);

    setTimeout(() => {
      sessionStorage.setItem(USERS, JSON.stringify(updatedUsers));
    }, 1000);
    return true;
  }

  getUser(userName: String, password: String) {
    let allUsers = JSON.parse(sessionStorage.getItem(USERS));
    let userExists: boolean = false;
    if (allUsers !== null) {
      allUsers.forEach((element) => {
        if (element.userName === userName) {
          if (element.password === password) {
            userExists = true;
            sessionStorage.setItem(LOGGEDINUSER, JSON.stringify(userName));
          }
        }
      });
    }
    if (userExists) return true;
    else return false;
  }

  public isAuthenticated(): boolean {
    const user = sessionStorage.getItem(LOGGEDINUSER);
    if (user !== null) return true;
    return false;
  }

  logoutUser() {
    sessionStorage.removeItem(LOGGEDINUSER);
  }
}
