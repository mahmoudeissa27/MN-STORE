import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FavoriteService } from '../../services/favorite.service';


@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  products: any[] = [];
  subcategory: string = '';
  successMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService

  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.subcategory = params.get('subcategory') || '';
      this.getProductsBySubcategory();
    });
  }

  getProductsBySubcategory(): void {
    if (this.subcategory) {
      this.productService.getByCategory(this.subcategory).subscribe({
        next: (res) => {
          this.products = res;
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });
    }
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.successMessage = `${product.title} has been added to the cart 🛒`;
    setTimeout(() => {
      this.successMessage = '';
    }, 2000);
  }
  addToFavorites(product: any): void {
    this.favoriteService.addToFavorites(product);
    this.successMessage = `${product.title} added to favorites ❤️`;
    setTimeout(() => {
      this.successMessage = '';
    }, 2000);
  }
}
