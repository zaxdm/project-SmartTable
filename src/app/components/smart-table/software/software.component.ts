import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: string;
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-st-software',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class StSoftwareComponent {
  particles = Array(10).fill(0);

  currentStep: number = 0;

  steps: Step[] = [
    {
      number: '01',
      icon: '📱',
      title: 'Menú Completo',
      desc: 'Accede a mensajes, redes sociales y todo el contenido desde un solo lugar.'
    },
    {
      number: '02',
      icon: '🌐',
      title: 'Redes Sociales',
      desc: 'Conecta a tus redes en redes sociales de tu comunidad.'
    },
    {
      number: '03',
      icon: '📘',
      title: 'Facebook',
      desc: 'Conecta con amigos y familia mientras disfrutas tu comida.'
    },
    {
      number: '04',
      icon: '📸',
      title: 'Instagram',
      desc: 'Comparte fotos y momentos especiales desde tu mesa.'
    },
    {
      number: '05',
      icon: '🎵',
      title: 'TikTok',
      desc: 'Vemos cosas y elementos divertidos mientras esperas tu pedido.'
    },
    {
      number: '06',
      icon: '🐦',
      title: 'Twitter / X',
      desc: 'Música y contenido actualizado en tiempo real.'
    },
    {
      number: '07',
      icon: '▶️',
      title: 'YouTube',
      desc: 'Vemos y entretienemos con tus videos favoritos.'
    },
    {
      number: '08',
      icon: '🎬',
      title: 'Netflix',
      desc: 'Series y películas para disfrutar mientras comes.'
    }
  ];

  goToStep(index: number): void {
    this.currentStep = index;
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent) {
      const fallback = document.createElement('div');
      fallback.style.cssText = `
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #0c2340, #1a3a5c);
        color: white;
        font-size: 48px;
        font-weight: 900;
      `;
      fallback.textContent = this.steps[this.currentStep].icon;
      parent.appendChild(fallback);
    }
  }
}