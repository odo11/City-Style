import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  protected readonly socials = [
    { label: 'Instagram', url: 'https://www.instagram.com/city0style/', handle: '@citystyle.salon' },
    { label: 'Facebook', url: 'https://www.facebook.com/City0Style/', handle: '/citystyle.salon' }
  ];

  protected readonly hours = [
    { day: 'Mo · Di', time: '09:00 – 19:00' },
    { day: 'Mi · Do', time: '09:00 – 21:00' },
    { day: 'Fr', time: '08:00 – 21:00' },
    { day: 'Sa', time: '09:00 – 16:00' }
  ];
}
