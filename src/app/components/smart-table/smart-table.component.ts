import { Component } from '@angular/core';
import { StNavbarComponent } from './navbar/navbar.component';
import { StHeroComponent } from './hero/hero.component';
import { StAboutComponent } from './about/about.component';
import { StProductComponent } from './product/product.component';
import { StSoftwareComponent } from './software/software.component';
import { StBenefitsComponent } from './benefits/benefits.component';
import { StContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-smart-table-landing',
  standalone: true,
  imports: [
    StNavbarComponent,
    StHeroComponent,
    StAboutComponent,
    StProductComponent,
    StSoftwareComponent,
    StBenefitsComponent,
    StContactComponent
  ],
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableLandingComponent {}
