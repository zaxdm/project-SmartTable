import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-st-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class StHeroComponent implements AfterViewInit {

  @ViewChild('heroVideo') videoRef!: ElementRef<HTMLVideoElement>;

  stats = [
    { value: '+40%', label: 'Pedidos',  sublabel: 'más rápidos'    },
    { value: '100%', label: 'Software', sublabel: 'personalizable' },
    { value: '24/7', label: 'Soporte',  sublabel: 'dedicado'       }
  ];

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    video.muted = true;       // obligatorio para autoplay sin interacción
    video.playsInline = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // Si el navegador bloquea, reintenta al primer click/touch
        const resume = () => {
          video.play();
          document.removeEventListener('click',      resume);
          document.removeEventListener('touchstart', resume);
        };
        document.addEventListener('click',      resume, { once: true });
        document.addEventListener('touchstart', resume, { once: true });
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('canplay', tryPlay, { once: true });
    }

    // Retomar si el navegador pausa el video por política de visibilidad
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && video.paused) {
        video.play().catch(() => {});
      }
    });
  }
}
