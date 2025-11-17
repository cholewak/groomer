import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.css'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  formMessage = '';
  formSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.formMessage = '';

      // Simulate email sending - in production, use a service to send email
      const formData = this.contactForm.value;
      
      // You can integrate with email service like EmailJS, SendGrid, or your backend
      // For now, we'll simulate it
      setTimeout(() => {
        console.log('Form data:', formData);
        // In production, replace this with actual email service call
        // Example: this.emailService.sendEmail(formData).subscribe(...)
        
        this.isSubmitting = false;
        this.formSuccess = true;
        this.formMessage = 'Dziękujemy! Twoja wiadomość została wysłana.';
        this.contactForm.reset();
        
        setTimeout(() => {
          this.formMessage = '';
        }, 5000);
      }, 1000);
    } else {
      this.formMessage = 'Proszę wypełnić wszystkie wymagane pola poprawnie.';
      this.formSuccess = false;
    }
  }
}
