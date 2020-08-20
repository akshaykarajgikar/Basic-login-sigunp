import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { RegisterComponent } from "./register/register.component";
import { ListComponent } from "./list/list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegisterComponent, ListComponent],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
