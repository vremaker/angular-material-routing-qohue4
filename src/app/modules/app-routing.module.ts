import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RouteOneComponent } from "../components/route-one.component";
import { RouteTwoComponent } from "../components/route-two.component";
import { RouteThreeComponent } from "../components/route-three.component";

import { StartTab } from "../constants";

const routes: Routes = [
  {
    path: "route-one",
    component: RouteOneComponent,
    data: {
      isTab: true,
      tabName: "The First Tab",
      tabHint: ""
    }
  },
  {
    path: "route-two",
    component: RouteTwoComponent,
    data: {
      isTab: true,
      tabName: "This is the Second one",
      tabHint: "This is a hint"
    }
  },
  {
    path: "route-three",
    component: RouteThreeComponent,
    data: {
      isTab: true,
      tabName: "Third Route",
      tabHint: ""
    }
  },
  {
    path: "",
    redirectTo: StartTab,
    pathMatch: "full",
    data: { isTab: false }
  },
  { path: "**", redirectTo: "", data: { isTab: false } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
