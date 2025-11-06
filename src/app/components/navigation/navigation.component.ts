import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  protected mobileMenuOpen = false;
  protected scrolled = false;

  protected readonly links = [
    { label: 'Start', target: '#start' },
    { label: 'Über uns', target: '#ueber-uns' },
    { label: 'Preise', target: '#preise' },
    { label: 'Galerie', target: '#galerie' },
    { label: 'Kontakt', target: '#kontakt' }
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 20;
  }
}
