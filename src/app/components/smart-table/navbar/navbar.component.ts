import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-st-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class StNavbarComponent {
  navLinks = [
    { label: '¿Quiénes somos?', href: '#quienes-somos' },
    { label: 'Producto', href: '#producto' },
    { label: 'Software', href: '#software' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Contacto', href: '#contacto' }
  ];

  scrolled: boolean = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
