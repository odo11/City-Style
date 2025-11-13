import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AppointmentOverviewComponent } from '../../components/appointment-overview/appointment-overview';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppointmentOverviewComponent],
  templateUrl: './admin.page.html',
  styleUrl: './admin.page.css'
})
export class AdminPageComponent {
  private readonly formBuilder = new FormBuilder();
  protected readonly authForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  protected isAuthenticated = signal(false);
  protected errorMsg = signal('');

  protected login(): void {
    this.errorMsg.set('');
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    const pw = this.authForm.value.password;
    if (pw === '12345678') {
      this.isAuthenticated.set(true);
      this.authForm.reset();
    } else {
      this.errorMsg.set('Passwort ist falsch.');
    }
  }
}
