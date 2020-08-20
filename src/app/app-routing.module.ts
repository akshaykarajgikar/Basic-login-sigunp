import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuardService } from "src/core/service/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    component: AuthorizationComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    canActivate: [AuthGuardService],
  },
  { path: "**", redirectTo: "auth" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
