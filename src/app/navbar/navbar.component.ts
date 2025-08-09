import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  currentUser: any = null;

  constructor(
    private router: Router,          
    private authService: AuthService, 
    @Inject(PLATFORM_ID) private platformId: object 
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.currentUser = this.authService.getCurrentUser();
    }
  }
  
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.logout();
    }
    this.isLoggedIn = false;
    this.currentUser = null;
    this.router.navigate(['/']);
  }
}
