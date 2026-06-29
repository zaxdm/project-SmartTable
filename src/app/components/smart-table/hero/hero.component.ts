import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-st-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class StHeroComponent {
  stats = [
    { value: '+40%', label: 'Pedidos', sublabel: 'más rápidos' },
    { value: '100%', label: 'Software', sublabel: 'personalizable' },
    { value: '24/7', label: 'Soporte', sublabel: 'dedicado' }
  ];

  particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${4 + Math.random() * 6}px`,
    delay: `${Math.random() * 6}s`,
    duration: `${5 + Math.random() * 6}s`
  }));
}
