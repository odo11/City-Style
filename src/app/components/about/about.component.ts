import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Highlight {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  protected readonly highlights: Highlight[] = [
    { value: '15+', label: 'Jahre Erfahrung im Hair Design' },
    { value: '1.200+', label: 'zufriedene Stammkund:innen' },
  ];
}
