import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsComponent } from './electronics.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':subcategory', component: ElectronicsComponent }
];

@NgModule({
  declarations: [ElectronicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ElectronicsModule {}
