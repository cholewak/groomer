import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
    selector: 'app-gallery-widget',
    templateUrl: './gallery-widget.component.html',
    styleUrls: ['./gallery-widget.component.scss'],
    imports: [CommonModule]
})
export class GalleryWidgetComponent implements OnInit {
  selectedImage: GalleryImage | null = null;

  galleryImages: GalleryImage[] = [
    { src: '../../assets/img/example_img/home.jpg', alt: 'Grooming 1' },
    { src: '../../assets/img/example_img/home.jpg', alt: 'Grooming 2' },
    { src: '../../assets/img/example_img/home.jpg', alt: 'Grooming 3' },
    { src: '../../assets/img/example_img/home.jpg', alt: 'Grooming 4' },
    { src: '../../assets/img/example_img/home.jpg', alt: 'Grooming 5' },
    { src: '../../assets/img/example_img/home.jpg', alt: 'Grooming 6' },
    { src: '../../assets/img/example_img/home.jpg', alt: 'Grooming 7' },
    { src: '../../assets/img/example_img/home.jpg', alt: 'Grooming 8' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openLightbox(image: GalleryImage): void {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }
}
