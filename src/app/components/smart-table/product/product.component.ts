import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-st-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class StProductComponent {
  // Array para las partículas
  particles = Array(10).fill(0);
  
  productFeatures: ProductFeature[] = [
    {
      icon: '🪵',
      title: 'Mesa de madera premium',
      description: 'Acabado en madera natural de alta calidad, resistente y elegante para cualquier ambiente gastronómico.'
    },
    {
      icon: '📱',
      title: 'Pantalla táctil HD integrada',
      description: 'Display multitáctil de alta definición con vidrio templado reforzado y respuesta ultrarrápida.'
    },
    {
      icon: '⚙️',
      title: 'Software 100% editable',
      description: 'Personalizamos el menú, categorías, promociones y branding completo de tu restaurante.'
    },
    {
      icon: '🛡️',
      title: 'Instalación y soporte técnico',
      description: 'Acompañamiento profesional antes, durante y después de la implementación en tu local.'
    }
  ];
}