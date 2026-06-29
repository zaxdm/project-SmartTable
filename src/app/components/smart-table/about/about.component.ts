import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StNavbarComponent } from '../navbar/navbar.component';

interface AboutCard {
  icon: string;
  label: string;
  text: string;
}

@Component({
  selector: 'app-st-about',
  standalone: true,
  imports: [CommonModule, RouterLink, StNavbarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class StAboutComponent {
  cards: AboutCard[] = [
    {
      icon: '🎯',
      label: 'Misión',
      text: 'Brindar soluciones tecnológicas innovadoras que impulsen la modernización y competitividad de los restaurantes, mejorando su eficiencia operativa y la experiencia de sus clientes.'
    },
    {
      icon: '🔭',
      label: 'Visión',
      text: 'Ser líderes en tecnología interactiva para restaurantes, transformando la experiencia gastronómica a través de la innovación y consolidando un modelo de servicio eficiente, moderno y sostenible.'
    },
    {
      icon: '💡',
      label: 'Propuesta de valor',
      text: 'Combinamos diseño, tecnología y servicio para ofrecer mesas redondas de madera con pantalla táctil integrada y un software editable a la medida de cada restaurante, preservando la esencia del negocio.'
    }
  ];

  openWhatsApp() {
    window.open('https://wa.me/51993981844', '_blank');
  }
}

