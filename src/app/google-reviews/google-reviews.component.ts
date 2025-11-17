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
    // In production, you would fetch reviews from Google Places API
    // For now, using mock data
    // To integrate with Google Places API, you'll need:
    // 1. Google Cloud Platform account
    // 2. Places API enabled
    // 3. API Key
    // 4. Place ID
    
    setTimeout(() => {
      // Mock data - replace with actual API call
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
        },
        {
          author_name: 'Maria Wiśniewska',
          rating: 4,
          text: 'Bardzo miła obsługa i dobre ceny. Salon czysty i profesjonalny.',
          time: Date.now() - 259200000
        },
        {
          author_name: 'Piotr Zieliński',
          rating: 5,
          text: 'Fantastyczna atmosfera, pies czuje się komfortowo. Efekty zawsze na najwyższym poziomie!',
          time: Date.now() - 345600000
        }
      ];
      
      this.calculateAverageRating();
      this.isLoading = false;
    }, 1000);

    // Example API call (uncomment and configure):
    /*
    const placeId = 'YOUR_PLACE_ID';
    const apiKey = 'YOUR_API_KEY';
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        this.reviews = data.result.reviews || [];
        this.calculateAverageRating();
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Error loading Google reviews:', error);
        this.isLoading = false;
      });
    */
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

  roundRating(rating: number): number {
    return Math.round(rating);
  }
}

