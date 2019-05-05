import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "gift-list",
    loadChildren: "../app/gift-list/gift-list.module#GiftListModule"
  },
  {
    path: "stuff-list",
    loadChildren: "../app/stuff-list/stuff-list.module#StuffListModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterModule { }