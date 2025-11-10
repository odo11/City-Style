import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { AppointmentComponent } from '../../components/appointment/appointment.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    PricingComponent,
    AppointmentComponent,
    GalleryComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
