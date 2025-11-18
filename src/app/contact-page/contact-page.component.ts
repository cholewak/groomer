import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  title: string;
  text: string;
}

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

  contactInfo: ContactInfo[] = [
    {
      icon: '📍',
      title: 'Adres',
      text: 'ul. Przykładowa 123<br>00-000 Warszawa'
    },
    {
      icon: '📞',
      title: 'Telefon',
      text: '<a href="tel:+48000000000">+48 000 000 000</a>'
    },
    {
      icon: '✉️',
      title: 'Email',
      text: '<a href="mailto:kontakt&#64;salon.pl">kontakt&#64;salon.pl</a>'
    },
    {
      icon: '🕐',
      title: 'Godziny otwarcia',
      text: 'Pon-Pt: 9:00 - 18:00<br>Sb: 9:00 - 15:00<br>Nd: Zamknięte'
    }
  ];

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

      const formData = this.contactForm.value;
      
      setTimeout(() => {
        console.log('Form data:', formData);
        
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
