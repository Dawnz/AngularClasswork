import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  constructor() {}
  cardContents = [
    {
      image: 'assets/images/testimonial/m-leighton.jpeg',
      paragraph:
        "Being only a junior developer, I have often times ran into coding issues, and with an overwhelming amount of information to fix bugs, Damian's consulting has helped me to push out my protects faster and more effeciently.",
      author: 'Michael Leighton',
    },
    {
      image: 'assets/images/testimonial/a-clarke.jfif',
      paragraph:
        "Damian has a great work ethic. He always goes above and beyond, exceeding  my expectations. I'm really glad to have the opportunity to work with you.Thanks a ton!",
      author: 'Aldaine Clarke',
    },
    {
      image: 'assets/images/testimonial/pic3.jpg',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      author: 'Anonymous',
    },
  ];
  ngOnInit(): void {}
}
