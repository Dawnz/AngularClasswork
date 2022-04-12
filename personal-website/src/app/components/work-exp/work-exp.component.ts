import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css'],
})
export class WorkExpComponent {
  constructor() {}
  cardContents = [
    {
      title: 'Software Developer',
      subtitle: 'March 2021-May 2021',
      paragraph: [
        `Gained knowledge in designing and developing full-stack web-based applications using JavaScript and modern frameworks like React JS, Node JS along with RESTful Web Services.`,

        `
      	Completed a comprehensive course on JavaScript, React, Advanced React, flex box and Grid courses (CSS).`,

        `Developed Single Page application using React JS`,
      ],
      progress: 40,
    },
    {
      title: 'Web Designer',
      subtitle: 'June 2021-Current',
      paragraph: [
        `Develop functional and appealing web and mobile-based applications based on usability.`,

        `
      	Gained knowledge of core Angular & AngularJS concepts such as controllers, components, modules, services, directives and routing.`,

        `Implemented client-side validations using JavaScript/TypeScript`,
      ],
      progress: 60,
    },
  ];
  move(n: number, elem: any) {
    let width: number = 1;
    const id = setInterval(() => frame(), 10);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        if (width != n) {
          width++;

          elem ? (elem.style.width = width + '%') : null;
        }
      }
    }
  }

  ngAfterViewInit(): void {
    const myEntry: Element = document.getElementById('myBar2') as Element;
    const percent: number[] = [40, 60];

    const observer = new IntersectionObserver((myEntries, observer) => {
      myEntries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            let item = Array.from(
              entry.target.getElementsByClassName('progress-bar')
            );
            percent.forEach((number, index) => {
              this.move(number, item[index]);
            });
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-100px' }
      );
    });
    observer.observe(myEntry);
  }
}
