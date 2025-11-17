import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

interface FacebookPost {
  id: string;
  message: string;
  created_time: string;
  link?: string;
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

  constructor() { }

  ngOnInit(): void {
    this.loadFacebookPosts();
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
        this.posts = [
          {
            id: '1',
            message: 'Zapraszamy do naszego salonu! Nowe usługi groomerskie już dostępne.',
            created_time: new Date().toISOString(),
            link: 'https://facebook.com'
          },
          {
            id: '2',
            message: 'Piękna metamorfoza naszego klienta! Zobaczcie efekt przed i po.',
            created_time: new Date(Date.now() - 86400000).toISOString(),
            link: 'https://facebook.com'
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

