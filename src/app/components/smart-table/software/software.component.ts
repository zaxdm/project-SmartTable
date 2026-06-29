import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
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
      title: 'Inicio',
      desc: 'En esta pantalla, elige la opción Cliente para acceder al menú y comenzar tu pedido.'
    },
    {
      title: 'Seleccione',
      desc: 'Ingresa el número de tu mesa y haz clic en "Ver Menú" para continuar.'
    },
    {
      title: 'Elige',
      desc: 'Revisa el menú disponible y elige los productos de tu preferencia para agregarlos al pedido.'
    },
    {
      title: 'Instagram',
      desc: 'Comparte fotos y momentos especiales desde tu mesa.'
    },
    {
      title: 'TikTok',
      desc: 'Vemos cosas y elementos divertidos mientras esperas tu pedido.'
    },
    {
      title: 'Twitter / X',
      desc: 'Música y contenido actualizado en tiempo real.'
    },
    {
      title: 'YouTube',
      desc: 'Vemos y entretienemos con tus videos favoritos.'
    },
    {
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
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #0c2340, #1a3a5c);
        color: white;
        font-size: 48px;
        font-weight: 900;
        opacity: 0.8;
        text-align: center;
        padding: 20px;
      `;
      fallback.innerHTML = `
        <div>
          <div style="font-size: 56px; margin-bottom: 12px;">📱</div>
          <div style="font-size: 18px; font-weight: 700;">${this.steps[this.currentStep].title}</div>
          <div style="font-size: 14px; font-weight: 400; opacity: 0.6; margin-top: 8px;">Imagen no disponible</div>
        </div>
      `;
      parent.appendChild(fallback);
    }
  }
}