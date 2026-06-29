import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-st-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class StContactComponent {
  particles = Array(10).fill(0);
  bubbles = Array(8).fill(0);

  contactInfo = [
    { icon: '📍', label: 'Dónde estamos', value: 'Piura, Perú' },
    { icon: '📞', label: 'WhatsApp', value: '+51 993 981 844' }
  ];

  openWhatsApp() {
    const msg = encodeURIComponent('Hola SmartTable, me interesa conocer más sobre las mesas táctiles interactivas.');
    window.open(`https://wa.me/51993981844?text=${msg}`, '_blank');
  }
}