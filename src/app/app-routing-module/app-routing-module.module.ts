import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactPageComponent} from "../contact-page/contact-page.component";
import { HomePageComponent} from "../home-page/home-page.component";

const routes: Routes = [
  { path: 'home', component:  HomePageComponent},
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
