import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-st-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class StBenefitsComponent {
String(arg0: number) {
throw new Error('Method not implemented.');
}
  particles = Array(10).fill(0);

  benefits: Benefit[] = [
    { 
      icon: '⚡', 
      title: 'Operación más eficiente', 
      description: 'Reduce errores y acelera la rotación de mesas con pedidos digitales directos a cocina.', 
      accent: '#0284c7' 
    },
    { 
      icon: '✨', 
      title: 'Experiencia diferenciada', 
      description: 'Sorprende a tus clientes con una propuesta moderna, visual y entretenida.', 
      accent: '#d96b43' 
    },
    { 
      icon: '🎨', 
      title: 'Personalización total', 
      description: 'Adaptamos el software a tu marca, menú y flujo operativo.', 
      accent: '#7c3aed' 
    },
    { 
      icon: '🛡️', 
      title: 'Calidad y soporte', 
      description: 'Hardware robusto y un equipo siempre disponible para tu restaurante.', 
      accent: '#059669' 
    },
    { 
      icon: '📈', 
      title: 'Mayor ticket promedio', 
      description: 'Recomendaciones visuales y promociones que aumentan tus ventas.', 
      accent: '#d97706' 
    },
    { 
      icon: '📊', 
      title: 'Datos a tu favor', 
      description: 'Información de pedidos y preferencias para tomar mejores decisiones.', 
      accent: '#db2777' 
    },
  ];
}