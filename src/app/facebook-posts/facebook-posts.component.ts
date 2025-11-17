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
    // In production, you would fetch posts from Facebook Graph API
    // For now, using mock data
    // To integrate with Facebook API, you'll need:
    // 1. Facebook App ID and App Secret
    // 2. Access Token
    // 3. Page ID
    
    setTimeout(() => {
      // Mock data - replace with actual API call
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
        },
        {
          id: '3',
          message: 'Specjalna oferta na grudzień! Rabat 20% na wszystkie usługi.',
          created_time: new Date(Date.now() - 172800000).toISOString(),
          link: 'https://facebook.com'
        }
      ];
      this.isLoading = false;
    }, 1000);

    // Example API call (uncomment and configure):
    /*
    const pageId = 'YOUR_PAGE_ID';
    const accessToken = 'YOUR_ACCESS_TOKEN';
    fetch(`https://graph.facebook.com/v18.0/${pageId}/posts?access_token=${accessToken}`)
      .then(response => response.json())
      .then(data => {
        this.posts = data.data;
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Error loading Facebook posts:', error);
        this.isLoading = false;
      });
    */
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

