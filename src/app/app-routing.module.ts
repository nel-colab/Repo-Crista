import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './components/main/galeria/galeria.component';
import { TablaComponent } from './components/main/tabla/tabla.component';

const router: Routes =[
  {path: 'galeria', component: GaleriaComponent},
  {path: 'usuarios', component: TablaComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
