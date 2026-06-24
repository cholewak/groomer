import { Component, OnInit, HostListener } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  title: string;
  text: string;
  type?: 'address' | 'phone' | 'email' | 'facebook' | 'whatsapp';
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
      text: 'ul. Objazdowa 15<br>43-430 Skoczów',
      type: 'address'
    },
    {
      icon: '📞',
      title: 'Telefon',
      text: '+48 884 895 777',
      type: 'phone'
    },
    {
      icon: '✉️',
      title: 'Email',
      text: 'salongroomingu.kj&#64;gmail.com',
      type: 'email'
    },
    {
      icon: '📘',
      title: 'Facebook',
      text: 'Odwiedź nas na Facebooku',
      type: 'facebook'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      text: 'Napisz przez WhatsApp: +48 884 895 777',
      type: 'whatsapp'
    },
    {
      icon: '🕐',
      title: 'Godziny otwarcia',
      text: 'Pon-Pt: 9:00 - 20:00<br>Sb: Zamknięte<br>Nd: Zamknięte'
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

  onCardClick(info: ContactInfo): void {
    switch (info.type) {
      case 'address':
        window.open(
          'https://www.google.com/maps?q=Salon+pielęgnacji+psów+i+kotów+Karolina+Jakubek,+Objazdowa+15,+43-430+Skoczów&hl=pl&z=18',
          '_blank',
        );
        break;
      case 'phone':
        window.location.href = 'tel:+48884895777';
        break;
      case 'email': {
        const email = 'salongroomingu.kj@gmail.com';
        const gmailComposeUrl =
          'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email);
        window.open(gmailComposeUrl, '_blank');
        break;
      }
      case 'facebook':
        window.open(
          'https://www.facebook.com/p/Salon-piel%C4%99gnacji-ps%C3%B3w-i-kot%C3%B3w-Karolina-Jakubek-100078916577702/',
          '_blank',
        );
        break;
      case 'whatsapp':
        window.open('https://wa.me/48884895777', '_blank');
        break;
      default:
        break;
    }
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
