import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css'],
})
export class MyServiceComponent implements OnInit {
  constructor() {}

  cardContents = [
    {
      image: 'assets/images/ui-design.png',
      title: 'UI/UX Design',
      paragraph:
        "The end-user is always at the heart of our design considerations. I offer a range of design services such as; UX research, interaction design, and full-usability audits. I design and create digital experiences that are purposeful and enjoyable for end-users and clients. Your users are our priority, and our minimum goal is a client's maximum satisfaction.",
    },
    {
      image: 'assets/images/web-dev.png',
      title: 'Web Development',
      paragraph:
        'I provide expert web application development and web design services to clients. I am committed to creating powerful, effective, and engaging websites. I intend to help maximize business potential and accelerate profits.  ',
    },
    {
      image: 'assets/images/digital-marketing.png',
      title: 'Digital Marketing',
      paragraph:
        'I work with you to produce customized internet marketing services and a plan that aligns with your unique business needs. I try to become an extension of your team, a partner that understands your market and goals. The digital marketing offered follows a systematic approach to ensure all your online marketing efforts deliver profitable results.',
    },
  ];
  ngOnInit(): void {}
}
