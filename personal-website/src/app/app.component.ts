import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'personal-website';
  currentRoute: string = '';
  // change title if the URL changes
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log(this.router.url);
        let val = this.router.url.toString();
        this.currentRoute = val.substring(1);
      });
  }

  ngOnInit() {
    console.log(this.router.url);
  }
}
