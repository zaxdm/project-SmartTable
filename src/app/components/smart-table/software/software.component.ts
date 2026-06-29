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
      title: 'Selecciona la opción Cliente',
      desc: 'En la pantalla de inicio, elige la opción Cliente para acceder al menú y comenzar tu pedido.'
    },
    {
      title: 'Elige tu número de mesa',
      desc: 'Ingresa el número de tu mesa y haz clic en "Ver Menú" para continuar.'
    },
    {
      title: 'Explora el menú y selecciona tus productos',
      desc: 'Revisa el menú disponible y elige los productos de tu preferencia para agregarlos al pedido.'
    },
    {
      title: 'Realiza tu pedido',
      desc: 'Revisa los productos en tu carrito, ajusta cantidades y haz clic en "Realizar pedido" para enviarlo a cocina.'
    },
    {
      title: 'Realiza tu pago',
      desc: 'Selecciona tu método de pago favorito (Yape, Plin, BCP, Interbank, Visa/Mastercard o Efectivo) y completa tu compra de forma segura.'
    },
    {
      title: 'Configura tu menú',
      desc: 'Personaliza la forma en que ves el menú ajustando el modo día/noche, brillo y volumen según tu preferencia.'
    },
    {
      title: 'Zona de juegos',
      desc: 'Mientras esperas tu pedido, diviértete con nuestra zona de juegos integrada en la mesa.'
    },
    {
      title: 'Conéctate a tus redes sociales',
      desc: 'Accede a tus redes favoritas mientras disfrutas tu comida sin perder un solo momento.'
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