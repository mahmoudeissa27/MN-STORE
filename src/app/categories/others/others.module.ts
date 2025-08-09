import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersComponent } from './others.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':subcategory', component: OthersComponent }
];

@NgModule({
  declarations: [OthersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OthersModule {}
