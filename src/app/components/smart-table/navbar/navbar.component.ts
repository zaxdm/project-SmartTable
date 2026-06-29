import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-st-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class StNavbarComponent {
  navLinks = [
    { label: '¿Quiénes somos?', type: 'route', href: '/about' },
    { label: 'Producto', type: 'scroll', href: 'producto' },
    { label: 'Software', type: 'scroll', href: 'software' },
    { label: 'Beneficios', type: 'scroll', href: 'beneficios' },
    { label: 'Contacto', type: 'scroll', href: 'contacto' }
  ];

  scrolled: boolean = false;
  menuOpen = false;
i: any;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  this.menuOpen = false;
}
onNavClick(event: Event, link: any) {
  if (link.type === 'scroll') {
    event.preventDefault();
    this.scrollTo(link.href);
  }
}
}
