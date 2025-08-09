import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureComponent } from './furniture.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':subcategory', component: FurnitureComponent }
];

@NgModule({
  declarations: [FurnitureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FurnitureModule {}
