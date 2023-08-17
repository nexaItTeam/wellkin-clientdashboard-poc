import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';
import { DemoComponent } from './client/demo/demo.component';
import {
  bellIcon,
  calendarIcon,
  circleIcon,
  envelopeLinkIcon,
  inboxIcon,
  pencilIcon,
  starOutlineIcon,
} from "@progress/kendo-svg-icons";
import { ClientFormComponent } from './client/client-form/client-form.component';


const routes: Routes = [{ 
  path: 'login', 
  component: LoginComponent,
  children:[]
 },
 {
 path: '', 
 component:ClientLayoutComponent ,
 children:[
  {
    path: 'demo', 
  component: DemoComponent,
  },
  {
    path: 'client-form', 
  component: ClientFormComponent,
  },
  
 ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
