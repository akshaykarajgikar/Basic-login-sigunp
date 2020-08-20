import { Component, OnInit } from "@angular/core";
import { UserDataService } from "src/core/service/user-data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styles: [],
})
export class ListComponent implements OnInit {
  myData;

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.myData = this.userDataService.getUserData();
  }

  // getMyData() {
  //   this.myData = this.userDataService.getUserData();
  // }
}
