import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

interface Service {
  emoji: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss'],
    imports: [CommonModule]
})
export class ServicesPageComponent implements OnInit {
  services: Service[] = [
    {
      emoji: '✂️',
      title: 'Strzyżenie',
      description: 'Profesjonalne strzyżenie dostosowane do rasy i preferencji właściciela.',
      features: ['Wszystkie rasy', 'Nowoczesne techniki', 'Indywidualne podejście']
    },
    {
      emoji: '🛁',
      title: 'Kąpiel i Suszenie',
      description: 'Delikatna kąpiel z użyciem profesjonalnych kosmetyków oraz bezpieczne suszenie.',
      features: ['Profesjonalne kosmetyki', 'Bezpieczne suszenie', 'Kondycjonowanie']
    },
    {
      emoji: '💅',
      title: 'Pielęgnacja Pazurów',
      description: 'Bezpieczne i precyzyjne obcinanie pazurów z dbałością o komfort pupila.',
      features: ['Bezpieczne narzędzia', 'Delikatne podejście', 'Polerowanie']
    },
    {
      emoji: '👂',
      title: 'Czyszczenie Uszu',
      description: 'Profesjonalne czyszczenie uszu z użyciem bezpiecznych preparatów.',
      features: ['Bezpieczne preparaty', 'Delikatne czyszczenie', 'Kontrola zdrowia']
    },
    {
      emoji: '✨',
      title: 'Pakiet Kompleksowy',
      description: 'Wszystkie usługi w jednym pakiecie - oszczędność czasu i pieniędzy.',
      features: ['Wszystkie usługi', 'Priorytetowa rezerwacja']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
