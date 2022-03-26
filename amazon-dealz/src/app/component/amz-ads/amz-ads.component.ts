import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amz-ads',
  templateUrl: './amz-ads.component.html',
  styleUrls: ['./amz-ads.component.css'],
})
export class AmzAdsComponent implements OnInit {
  @Input() currentScreenSize: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
