import { Routes } from '@angular/router';
import { StAboutComponent } from './components/smart-table/about/about.component';
import { SmartTableLandingComponent } from './components/smart-table/smart-table.component';


export const routes = [
  { path: '', component: SmartTableLandingComponent },
  { path: 'about', component: StAboutComponent },
];