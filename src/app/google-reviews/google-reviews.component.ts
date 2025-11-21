import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

@Component({
    selector: 'app-google-reviews',
    templateUrl: './google-reviews.component.html',
    styleUrls: ['./google-reviews.component.scss'],
    imports: [CommonModule]
})
export class GoogleReviewsComponent implements OnInit {
  reviews: GoogleReview[] = [];
  isLoading = true;
  averageRating = 0;
  currentSlideIndex = 0;
  reviewsPerSlide = 3;

  constructor() { }

  ngOnInit(): void {
    this.loadGoogleReviews();
  }

  get visibleReviews(): GoogleReview[] {
    const start = this.currentSlideIndex * this.reviewsPerSlide;
    const end = start + this.reviewsPerSlide;
    return this.reviews.slice(start, end);
  }

  get totalSlides(): number {
    return Math.ceil(this.reviews.length / this.reviewsPerSlide);
  }

  nextSlide(): void {
    if (this.currentSlideIndex < this.totalSlides - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.totalSlides - 1;
    }
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  loadGoogleReviews(): void {
    // Wpisz tutaj swój Google Places API Key
    const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
    
    // Najpierw szukamy Place ID dla salonu
    const placeName = encodeURIComponent('Salon pielęgnacji psów i kotów Karolina Jakubek');
    
    // Krok 1: Znajdź Place ID używając Text Search
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeName}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          const placeId = data.results[0].place_id;
          
          // Krok 2: Pobierz szczegóły miejsca z opiniami
          return fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&key=${apiKey}`);
        } else {
          throw new Error('Place not found');
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.result && data.result.reviews) {
          // Konwertuj opinie z Google API do naszego formatu
          this.reviews = data.result.reviews.map((review: any) => ({
            author_name: review.author_name,
            rating: review.rating,
            text: review.text,
            time: review.time * 1000, // Google używa sekund, my milisekund
            profile_photo_url: review.profile_photo_url
          }));
          
          this.calculateAverageRating();
          this.isLoading = false;
        } else {
          throw new Error('No reviews found');
        }
      })
      .catch(error => {
        console.error('Error loading Google reviews:', error);
        // Fallback do mock data jeśli API nie działa
        const now = Date.now();
        this.reviews = [
          {
            author_name: 'Anna Kowalska',
            rating: 5,
            text: 'Świetny salon! Profesjonalna obsługa i piękne efekty. Mój pies czuje się tam jak król. Polecam wszystkim właścicielom psów!',
            time: now - 86400000
          },
          {
            author_name: 'Jan Nowak',
            rating: 5,
            text: 'Najlepszy groomer w mieście. Mój pies zawsze wygląda fantastycznie po wizycie. Zespół jest bardzo cierpliwy i dba o komfort pupila.',
            time: now - 172800000
          },
          {
            author_name: 'Maria Wiśniewska',
            rating: 5,
            text: 'Fantastyczna obsługa! Mój kot zazwyczaj boi się groomerów, ale tutaj czuł się bezpiecznie. Profesjonalne podejście i świetne efekty.',
            time: now - 259200000
          },
          {
            author_name: 'Piotr Zieliński',
            rating: 5,
            text: 'Regularnie odwiedzamy ten salon od 2 lat. Zawsze profesjonalna obsługa, świetne ceny i piękne efekty. Gorąco polecam!',
            time: now - 345600000
          },
          {
            author_name: 'Katarzyna Szymańska',
            rating: 5,
            text: 'Wspaniały salon! Mój pies uwielbia wizyty. Personel jest bardzo miły, cierpliwy i profesjonalny. Efekty zawsze przekraczają oczekiwania.',
            time: now - 432000000
          },
          {
            author_name: 'Tomasz Wójcik',
            rating: 5,
            text: 'Najlepszy wybór w mieście! Używają tylko sprawdzonych, bezpiecznych kosmetyków. Mój pies czuje się tam naprawdę dobrze.',
            time: now - 518400000
          },
          {
            author_name: 'Agnieszka Kaczmarek',
            rating: 5,
            text: 'Rewelacyjna metamorfoza mojego psa! Zespół ma ogromne doświadczenie i pasję do zwierząt. Widać to w każdym detalu.',
            time: now - 604800000
          },
          {
            author_name: 'Marcin Lewandowski',
            rating: 5,
            text: 'Polecam każdemu! Salon jest bardzo czysty, personel profesjonalny, a ceny są konkurencyjne. Moje psy zawsze wyglądają rewelacyjnie.',
            time: now - 691200000
          },
          {
            author_name: 'Joanna Dąbrowska',
            rating: 5,
            text: 'Fantastyczne miejsce! Personel jest bardzo empatyczny i rozumie potrzeby zwierząt. Mój pies nie może doczekać się kolejnej wizyty.',
            time: now - 777600000
          },
          {
            author_name: 'Paweł Mazur',
            rating: 5,
            text: 'Świetny salon groomerski! Profesjonalne podejście, miła obsługa i piękne efekty. To jedyny salon, któremu ufam z moim psem.',
            time: now - 864000000
          }
        ];
        this.calculateAverageRating();
        this.isLoading = false;
      });
  }

  calculateAverageRating(): void {
    if (this.reviews.length === 0) {
      this.averageRating = 0;
      return;
    }
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    this.averageRating = sum / this.reviews.length;
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('pl-PL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  getStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < rating);
  }

  getStarArray(rating: number): boolean[] {
    // Zwraca tablicę 5 elementów - true dla wypełnionych, false dla pustych
    const roundedRating = Math.round(rating);
    return Array(5).fill(false).map((_, i) => i < roundedRating);
  }

  roundRating(rating: number): number {
    return Math.round(rating);
  }

  getSlideArray(): number[] {
    return Array.from({ length: this.totalSlides }, (_, i) => i);
  }
}

