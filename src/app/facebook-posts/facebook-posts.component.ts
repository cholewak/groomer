import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

interface FacebookPost {
  id: string;
  message: string;
  created_time: string;
  link?: string;
  image_url?: string;
}

@Component({
    selector: 'app-facebook-posts',
    templateUrl: './facebook-posts.component.html',
    styleUrls: ['./facebook-posts.component.scss'],
    imports: [CommonModule]
})
export class FacebookPostsComponent implements OnInit {
  posts: FacebookPost[] = [];
  isLoading = true;
  currentSlideIndex = 0;
  postsPerSlide = 3;

  constructor() { }

  ngOnInit(): void {
    this.loadFacebookPosts();
  }

  get visiblePosts(): FacebookPost[] {
    const start = this.currentSlideIndex * this.postsPerSlide;
    const end = start + this.postsPerSlide;
    return this.posts.slice(start, end);
  }

  get totalSlides(): number {
    return Math.ceil(this.posts.length / this.postsPerSlide);
  }

  getSlideArray(): number[] {
    return Array.from({ length: this.totalSlides }, (_, i) => i);
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

  loadFacebookPosts(): void {
    // Wpisz tutaj swoje dane Facebook API
    const pageId = 'YOUR_FACEBOOK_PAGE_ID'; // ID strony Facebook salonu
    const accessToken = 'YOUR_FACEBOOK_ACCESS_TOKEN'; // Long-lived access token
    
    // Pobierz wpisy z Facebook Graph API
    fetch(`https://graph.facebook.com/v18.0/${pageId}/posts?fields=message,created_time,permalink_url&limit=5&access_token=${accessToken}`)
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          this.posts = data.data.map((post: any) => ({
            id: post.id,
            message: post.message || 'Brak treści',
            created_time: post.created_time,
            link: post.permalink_url || `https://facebook.com/${pageId}`
          }));
          this.isLoading = false;
        } else {
          throw new Error('No posts found');
        }
      })
      .catch(error => {
        console.error('Error loading Facebook posts:', error);
        // Fallback do mock data jeśli API nie działa
        const now = Date.now();
        this.posts = [
          {
            id: '1',
            message: 'Zapraszamy do naszego salonu! Nowe usługi groomerskie już dostępne. Specjalizujemy się w profesjonalnej pielęgnacji psów i kotów.',
            created_time: new Date(now).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '2',
            message: 'Piękna metamorfoza naszego klienta! Zobaczcie efekt przed i po. Nasz zespół pracuje z pasją i dbałością o każdy detal.',
            created_time: new Date(now - 86400000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '3',
            message: 'Nowe promocje w tym miesiącu! Rabaty na pakiety kompleksowe. Skorzystaj z naszej oferty już dziś!',
            created_time: new Date(now - 172800000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '4',
            message: 'Witamy nowego członka zespołu! Nasz groomer ma 5 lat doświadczenia w pracy z psami wszystkich ras.',
            created_time: new Date(now - 259200000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '5',
            message: 'Dziękujemy za wszystkie pozytywne opinie! Cieszymy się, że możemy pomagać w dbaniu o Waszych pupili.',
            created_time: new Date(now - 345600000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '6',
            message: 'Wakacyjny pakiet pielęgnacji - specjalna oferta dla właścicieli psów. Umów wizytę już dziś!',
            created_time: new Date(now - 432000000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '7',
            message: 'Przypominamy o regularnych wizytach groomerskich. Regularna pielęgnacja to zdrowie i piękny wygląd!',
            created_time: new Date(now - 518400000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '8',
            message: 'Nowe kosmetyki premium już w naszym salonie! Używamy tylko sprawdzonych, bezpiecznych produktów.',
            created_time: new Date(now - 604800000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '9',
            message: 'Warsztaty dla właścicieli psów - jak dbać o sierść pupila w domu. Zapraszamy na darmowe spotkanie!',
            created_time: new Date(now - 691200000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          },
          {
            id: '10',
            message: 'Nasz salon zdobył nagrodę "Najlepszy Groomer Roku 2024"! Dziękujemy za zaufanie i wsparcie.',
            created_time: new Date(now - 777600000).toISOString(),
            link: 'https://facebook.com',
            image_url: '../../assets/img/example_img/home.jpg'
          }
        ];
        this.isLoading = false;
      });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}

