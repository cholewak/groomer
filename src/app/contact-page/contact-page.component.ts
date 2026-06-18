import { Component, OnInit, HostListener } from '@angular/core';
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
    styleUrls: ['./contact-page.component.scss'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  formMessage = '';
  formSuccess = false;
  showScrollButton = false;

  contactInfo: ContactInfo[] = [
    {
      icon: '📍',
      title: 'Adres',
      text: 'ul. Objazdowa 15<br>43-430 Skoczów'
    },
    {
      icon: '📞',
      title: 'Telefon',
      text: '<a href="tel:+48 884895777">+48 884895777</a>'
    },
    {
      icon: '✉️',
      title: 'Email',
      text: '<a href="mailto:salongroomingu.kj&#64;gmail.com">salongroomingu.kj&#64;gmail.com</a>'
    },
    {
      icon: '🕐',
      title: 'Godziny otwarcia',
      text: 'Pon-Pt: 9:00 - 20:00<br>Sb: 9:00 - 20:00<br>Nd: Zamknięte'
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

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollButton = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
