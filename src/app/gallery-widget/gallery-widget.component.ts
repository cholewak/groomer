import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class GalleryWidgetComponent implements OnInit, OnDestroy {
  selectedImage: GalleryImage | null = null;
  currentSlide = 0;
  private autoPlayInterval: any;

  galleryImages: GalleryImage[] = [
    { src: '../../assets/img/picture/5.jpg', alt: 'Pielęgnacja psa - przed i po' },
    { src: '../../assets/img/picture/4.jpg', alt: 'Strzyżenie psa rasy Golden Retriever' },
    { src: '../../assets/img/picture/3.jpg', alt: 'Kąpiel i suszenie' },
    { src: '../../assets/img/picture/2.jpg', alt: 'Pielęgnacja kota' },
    { src: '../../assets/img/picture/1.jpg', alt: 'Kompleksowa pielęgnacja' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
    this.resetAutoPlay();
  }

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.galleryImages.length) % this.galleryImages.length;
    this.resetAutoPlay();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Zmiana co 5 sekund
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  resetAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  openLightbox(image: GalleryImage): void {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
    this.stopAutoPlay();
  }

  closeLightbox(): void {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
    this.startAutoPlay();
  }
}
