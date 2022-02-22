import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dataService: DataService) {}
  title = 'services';
  result: resData | undefined;

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data: resData) =>
        (this.result = {
          count: data.count,
          next: data['next'],
          previous: data['previous'],
          results: {
            name: data['results']['map']((res: { name: string }) => res.name),
            gender: data['results']['map'](
              (res: { gender: string }) => res.gender
            ),
          },
        })

      // this.dataService.getData().subscribe(
      //   (res: resData) =>
      //     (this.result = {
      //       count: res['count'],
      //       next: res['next'],
      //       previous: res['previous'],
      //       results: res['results'],
      //       // const results = Object.values(res);
      //       // this.result = res['results'];
      //       // this.result = res['results'];
      //       // this.result = res['results'].map(
      //       //   (res: { name: string; height: string }) => {
      //       //     const test = { name: res.name, height: res.height };
      //       //     return test;
      //       //   }
      //       // );
      //       // const name = res['results'].map((item: { name: string }) => item.name);
      //       // console.log(name);

      //       // console.log(Object.entries(res));
      //     })
    );
  }
}
interface resultData {
  [x: string]: any;
  name: string;
  gender: string;
}
export interface resData {
  count: number;
  next: string;
  previous: string;
  results: resultData;
}
