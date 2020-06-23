import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {EditComponent} from './components/edit/edit.component';
import {MainDisComponent} from './components/main-dis/main-dis.component';

const routes: Routes = [
  {path: 'edit', component: EditComponent},
  {path: 'main-dis', component: MainDisComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
