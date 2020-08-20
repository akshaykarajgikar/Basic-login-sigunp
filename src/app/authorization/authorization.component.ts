import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/core/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-authorization",
  templateUrl: "./authorization.component.html",
  styles: [],
})
export class AuthorizationComponent implements OnInit {
  loginUserName: String = "";
  loginPassword: String = "";
  registerUsername: String = "";
  registerEmail: String = "";
  registerPassword: String = "";
  confirmPassword: String = "";

  userLoggingIn: boolean = false;
  userLoggedIn: boolean = false;
  userRegistered: boolean = false;
  userRegisteringSpinner: boolean = false;
  userRegisteredSuccessfully: boolean = false;
  confirmPasswordIncorrect: boolean = false;
  userAlreadyExists: boolean = false;
  incorrectUserDetailsEntered: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isAuthenticated) this.router.navigate(["/dashboard"]);
  }

  onRegister() {
    if (this.registerPassword === this.confirmPassword) {
      this.userRegisteringSpinner = true;
      this.userRegistered = this.authService.registerUser(
        this.registerEmail,
        this.registerUsername,
        this.registerPassword
      );

      if (this.userRegistered === true) {
        setTimeout(() => {
          this.userRegisteringSpinner = false;
          this.userRegisteredSuccessfully = true;
        }, 1000);
        setTimeout(() => {
          this.userRegisteredSuccessfully = false;
        }, 7000);
      } else {
        setTimeout(() => {
          this.userAlreadyExists = true;
          this.userRegisteringSpinner = false;
        }, 1000);
        setTimeout(() => {
          this.userAlreadyExists = false;
        }, 7000);
      }
    } else {
      this.confirmPasswordIncorrect = true;
      setTimeout(() => {
        this.confirmPasswordIncorrect = false;
      }, 4000);
    }
  }

  onLogin() {
    this.userLoggingIn = true;
    this.userLoggedIn = this.authService.getUser(
      this.loginUserName,
      this.loginPassword
    );
    if (this.userLoggedIn === true) {
      setTimeout(() => {
        this.userLoggingIn = false;
        this.router.navigate(["/dashboard"]);
      }, 2000);
    } else {
      setTimeout(() => {
        this.userLoggingIn = false;
        this.incorrectUserDetailsEntered = true;
      }, 1000);
      setTimeout(() => {
        this.incorrectUserDetailsEntered = false;
      }, 4000);
    }
  }
}
