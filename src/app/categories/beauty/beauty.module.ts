import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautyComponent } from './beauty.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':subcategory', component: BeautyComponent }
];

@NgModule({
  declarations: [BeautyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BeautyModule {}
