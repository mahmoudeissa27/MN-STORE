import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service'; // أضفنا الـ AuthService عشان نتحقق من تسجيل الدخول
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService, 
    private authService: AuthService, 
    private router: Router 
  ) {}
loadCartItems(): void {
  this.cartItems = this.cartService.getCartItems();
}
  ngOnInit(): void {

    this.loadCartItems();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId); 
    this.loadCartItems(); 
  }

  clearCart(): void {
    this.cartService.clearCart(); 
   this.loadCartItems() 
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 
      0 
    );
  }

  checkout(): void {
    if (!this.authService.isLoggedIn()) {
      alert('You need to log in first to complete the purchase.');
      this.router.navigate(['/login']); 
      return; 
    }

    const user = this.authService.getCurrentUser(); 
    alert(`Thank you, ${user.username}! You will be redirected to the payment page shortly.`);
  }
}
