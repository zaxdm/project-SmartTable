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
      title: 'Explora el menú',
      desc: 'Los comensales navegan por el menú digital con fotos, descripciones y precios actualizados al instante.'
    },
    {
      number: '02',
      icon: '🛒',
      title: 'Arma tu pedido',
      desc: 'Seleccionan los platos, personalizan ingredientes y envían el pedido directamente a cocina con un solo toque.'
    },
    {
      number: '03',
      icon: '👨‍🍳',
      title: 'Cocina en tiempo real',
      desc: 'El pedido llega a la cocina con todos los detalles, reduciendo errores y tiempos de espera.'
    },
    {
      number: '04',
      icon: '✅',
      title: 'Confirma y disfruta',
      desc: 'El cliente recibe confirmación del pedido y puede ver el tiempo estimado de preparación.'
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
}
