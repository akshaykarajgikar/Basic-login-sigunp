import { Component, OnInit } from "@angular/core";
import { UserDataService } from "src/core/service/user-data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styles: [],
})
export class RegisterComponent implements OnInit {
  detailsEntetred: boolean = false;

  name: string = "";
  email: string = "";
  phone: number = null;
  city: string = "";

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {}

  saveMyData() {
    this.userDataService.setUserData(
      this.name,
      this.email,
      this.phone,
      this.city
    );
    this.detailsEntetred = true;
    setTimeout(() => {
      this.detailsEntetred = false;
    }, 3000);
  }
}
