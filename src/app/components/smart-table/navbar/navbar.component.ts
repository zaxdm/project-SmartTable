import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-st-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class StNavbarComponent {
  navLinks = [
    { label: '¿Quiénes somos?', type: 'route',  href: '/about' },
    { label: 'Producto',        type: 'scroll',  href: 'producto' },
    { label: 'Software',        type: 'scroll',  href: 'software' },
    { label: 'Beneficios',      type: 'scroll',  href: 'beneficios' },
    { label: 'Contacto',        type: 'scroll',  href: 'contacto' }
  ];

  scrolled  = false;
  menuOpen  = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onNavClick(event: Event, link: { type: string; href: string }) {
    if (link.type !== 'scroll') return;
    event.preventDefault();
    this.menuOpen = false;

    const isHome = this.router.url === '/' || this.router.url === '';

    if (isHome) {
      // Ya estamos en la landing, solo hacer scroll
      this.scrollToSection(link.href);
    } else {
      // Navegar a la landing y luego scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToSection(link.href), 120);
      });
    }
  }

  private scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
