import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteItems: any[] = [];

  addToFavorites(product: any) {
    const exists = this.favoriteItems.find(item => item.id === product.id);
    if (!exists) {
      this.favoriteItems.push(product);
    }
  }

  getFavorites(): any[] {
    return this.favoriteItems;
  }

  removeFromFavorites(productId: number) {
    this.favoriteItems = this.favoriteItems.filter(item => item.id !== productId);
  }

  clearFavorites() {
    this.favoriteItems = [];
  }
}
