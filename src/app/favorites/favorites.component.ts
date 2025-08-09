import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteItems: any[] = [];


  successMessage: string = '';

  constructor(
    private favoriteService: FavoriteService, 
    private cartService: CartService       
  ) {}

    loadFavoriteItems(): void {
      this.favoriteItems = this.favoriteService.getFavorites();
    }

  ngOnInit(): void {
    this.loadFavoriteItems(); 
  }


  removeFromFavorites(productId: number): void {
    this.favoriteService.removeFromFavorites(productId);
    this.loadFavoriteItems(); 
  }

  clearFavorites(): void {
    this.favoriteService.clearFavorites();
    this.loadFavoriteItems();
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.successMessage = ` ${product.title} has been added to the cart 🛒`;

   
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
}
