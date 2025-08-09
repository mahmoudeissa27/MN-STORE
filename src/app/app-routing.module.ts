import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  { path: "home", component: HomeComponent, title: "home" },
  { path: "Favorites", component: FavoritesComponent, title: "Favorites" },
  { path: "cart", component: CartComponent, title: "cart" },
  { path: "login", component: LoginComponent, title: "login" },

  { path: "clothing", loadChildren: () => import('./categories/clothing/clothing.module').then(m => m.ClothingModule) },
  { path: "beauty", loadChildren: () => import('./categories/beauty/beauty.module').then(m => m.BeautyModule) },
  { path: "electronics", loadChildren: () => import('./categories/electronics/electronics.module').then(m => m.ElectronicsModule) },
  { path: "others", loadChildren: () => import('./categories/others/others.module').then(m => m.OthersModule) },
  { path: "accessories", loadChildren: () => import('./categories/accessories/accessories.module').then(m => m.AccessoriesModule) },
  { path: "furniture", loadChildren: () => import('./categories/furniture/furniture.module').then(m => m.FurnitureModule) },

  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "**", component: NotFoundComponent, title: "notFound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]                 
})
export class AppRoutingModule { }
