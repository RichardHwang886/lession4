import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycompComponent } from './mycomp/mycomp.component';
import { Mycomp2Component } from './mycomp2/mycomp2.component';


const routes: Routes = [
  { path: 'my-comp', component: MycompComponent },
  { path: 'my-comp2/:id', component: Mycomp2Component },
  {
    path: '',
    redirectTo: '/my-comp',
    pathMatch: 'full'
  },
  { path: '**', component: MycompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
