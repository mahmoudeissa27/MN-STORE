import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingComponent } from './clothing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':subcategory', component: ClothingComponent }
];

@NgModule({
  declarations: [ClothingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClothingModule {}
