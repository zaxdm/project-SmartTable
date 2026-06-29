import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-st-software',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class StSoftwareComponent {
  currentStep = 0;

  steps = [
    {
      number: 1,
      title: 'Explora el menú',
      desc: 'Los clientes navegan el menú interactivo con fotos, descripciones y precios en tiempo real desde la mesa.',
      icon: '🍽️'
    },
    {
      number: 2,
      title: 'Personaliza tu orden',
      desc: 'Agrega notas especiales, selecciona extras y personaliza cada plato según tus preferencias.',
      icon: '✏️'
    },
    {
      number: 3,
      title: 'Revisa tu carrito',
      desc: 'Visualiza todos los items seleccionados, ajusta cantidades y verifica el total antes de confirmar.',
      icon: '🛒'
    },
    {
      number: 4,
      title: 'Realiza el pedido',
      desc: 'Con un toque el pedido viaja directo a cocina. Sin esperas, sin errores, sin fricción.',
      icon: '🚀'
    }
  ];

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(index: number) {
    this.currentStep = index;
  }
}
