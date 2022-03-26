import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-deals',
  templateUrl: './pop-deals.component.html',
  styleUrls: ['./pop-deals.component.css'],
})
export class PopDealsComponent implements AfterViewChecked {
  @Input() currentScreenSize: string | undefined;
  constructor() {}

  slideIndex: number = 1;

  dots = document.getElementsByClassName(
    'dot2'
  ) as HTMLCollectionOf<HTMLElement>;

  slides = document.getElementsByClassName(
    'mySlides2'
  ) as HTMLCollectionOf<HTMLElement>;

  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: number) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(' active', '');
    }
    this.slides[this.slideIndex - 1].style.display = 'block';
    this.dots[this.slideIndex - 1].className += ' active';
  }
  clearSlides() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'block';
    }
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(' active', '');
    }
  }

  ngAfterViewChecked() {
    if (
      this.currentScreenSize == 'Small' ||
      this.currentScreenSize == 'XSmall'
    ) {
      this.showSlides(this.slideIndex);
    } else {
      this.clearSlides();
    }
  }
}
