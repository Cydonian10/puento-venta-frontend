import { Routes } from '@angular/router';
import { AdminLayoutPage } from './layouts/admin/admin.layout';

export const routes: Routes = [
  {
    path:"auth",
    children: [
      {
        path:"login",
        loadComponent:() => import("./pages/login/login.page")
      }
    ]
  },
  {
    path:"",
    component: AdminLayoutPage,
    children : [
      {
        path:"",
        loadComponent: () => import("./pages/admin/admin.page")
      }
    ]
  }
  
];
