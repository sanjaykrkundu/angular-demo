import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {SingleComponent} from './single/single.component';


const routes: Routes = [
  {
    path:'emps',
    component:ListComponent
  },{
    path:'emps/:id',
    component:SingleComponent
  },{
    path:'new',
    component:SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
