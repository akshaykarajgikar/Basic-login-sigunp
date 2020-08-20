import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/core/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styles: [
    ".border-xl-right{border-right: 1px solid #eee} a>*{ transition: transform 200ms ease-out;} .active>*{transform: translateX(30px) scale(1.2);} @media(max-width: 1200px){.border-xl-right{border-right: none;} .active>*{transform: translateX(0px) scale(1);}}",
  ],
})
export class DashboardComponent implements OnInit {
  loggedOut: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.authService.logoutUser();
    this.loggedOut = true;
    setTimeout(() => {
      this.loggedOut = false;
      this.router.navigate(["/"]);
    }, 2000);
  }
}
