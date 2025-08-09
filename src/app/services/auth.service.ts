import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private users = [
    { username: '7oda', email: '7oda@test.com', password: '12345678' },
    { username: 'nour', email: 'nour@test.com', password: '12345678' }
  ];

  login(email: string, password: string) {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true; 
    }
    return false; 
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('currentUser');

    if (user) {
      return true;  
    } else {
      return false; 
    }
  }

 
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
