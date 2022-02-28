import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmEqualValidatorDirective } from 'src/app/directives/confirm-equal-validator.directive';
import { CustomValidator } from 'src/app/validators/customvalidator.validator';

@Component({
  selector: 'app-google-form',
  templateUrl: './google-form.component.html',
  styleUrls: ['./google-form.component.css'],
})
export class GoogleFormComponent implements OnInit {
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder) {}

  validationForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm: new FormControl(''),
  });
  // get f(): { [key: string]: AbstractControl } {
  //   return this.validationForm?.controls;
  // }
  showOrHide() {
    this.hide = !this.hide;
  }
  get firstName() {
    return this.validationForm.get('firstName');
  }
  get lastName() {
    return this.validationForm.get('lastName');
  }
  get email() {
    return this.validationForm.get('email');
  }
  get password() {
    return this.validationForm.get('password');
  }
  get confirm() {
    return this.validationForm.get('confirm');
  }

  ngOnInit(): void {
    this.validationForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm: [''],
      },
      {
        validators: [CustomValidator.match('password', 'confirm')],
      }
    );
  }
}
