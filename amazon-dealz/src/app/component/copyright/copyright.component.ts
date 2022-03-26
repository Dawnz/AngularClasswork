import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css'],
})
export class CopyrightComponent implements OnInit {
  @Input() currentScreenSize: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
