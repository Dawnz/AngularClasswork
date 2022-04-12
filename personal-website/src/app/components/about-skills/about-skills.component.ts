import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.css'],
})
export class AboutSkillsComponent implements OnInit {
  constructor() {}
  fileUrl = 'assets/docs/Resume.pdf';
  myFileName = 'Resume of Damian Green';
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

  ngOnInit(): void {
    // create Intersection observer;
    const myEntry: Element = document.getElementById('myBar') as Element;
    const percent: number[] = [90, 65, 85, 60, 80];
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
        { rootMargin: '-200px' }
      );
    });
    observer.observe(myEntry);
  }
}
