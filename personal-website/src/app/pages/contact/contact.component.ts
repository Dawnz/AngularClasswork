import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import 'src/assets/smtp.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  screenSize: string = '';
  displayNameMap = new Map([
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      // .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        // console.log(result);

        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.screenSize = this.displayNameMap.get(query) ?? 'Unknown';
            // this.myObserver.subscribe(this.currentScreenSize);
          }
        }
      });
  }

  Email: any;
  validationForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.maxLength(100)]),
  });
  get fullName() {
    return this.validationForm.get('fullName');
  }
  get email() {
    return this.validationForm.get('email');
  }
  get message() {
    return this.validationForm.get('message');
  }

  // onSubmit(f: NgForm) {
  //   this.Email.send({
  //     host: 'smtp.elasticemail.com',
  //     Username: 'dawnz2000@gmail.com',
  //     Password: '488A5B7038F22CA10CD73775FE33827EE7D2',
  //     To: 'dawnz2000@gmail.com',
  //     From: `dawnz2000@gmail.com`,
  //     Subject: 'Client Message',
  //     Body: `test
  //   `,
  //   });
  //   console.log('this was pressed');
  //   console.log(this.fullName?.value);
  // }
  contactCard = [
    {
      icon: 'phone_iphone',
      title: '+1876 396 4259',
      subtitle: 'Monday-Friday from 8am - 5pm',
    },
    {
      icon: 'home',
      title: 'Kingston, Jamaica',
      subtitle: 'Stony Hill, Heart Academy',
    },
    {
      icon: 'email',
      title: 'damiangreen2020@outlook.com',
      subtitle: 'Lets Talk!',
    },
  ];

  ngAfterViewInit(): void {
    // const screensize = responsive.currentScreenSize;
    // console.log(this.responsive.currentScreenSize, screensize);
  }
}
