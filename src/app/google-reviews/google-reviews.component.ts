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

  constructor() { }

  ngOnInit(): void {
    this.loadGoogleReviews();
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
        this.reviews = [
          {
            author_name: 'Anna Kowalska',
            rating: 5,
            text: 'Świetny salon! Profesjonalna obsługa i piękne efekty. Polecam!',
            time: Date.now() - 86400000
          },
          {
            author_name: 'Jan Nowak',
            rating: 5,
            text: 'Najlepszy groomer w mieście. Mój pies zawsze wygląda fantastycznie po wizycie.',
            time: Date.now() - 172800000
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
}

