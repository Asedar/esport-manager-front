import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)])
  })
  
  hide = true;

  getEmailErrorMessage() {
    if (this.form.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.form.controls['password'].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.form.controls['password'].hasError('minlength')) {
      return 'Password is too short';
    }
    if (this.form.controls['password'].hasError('maxlength')) {
      return 'Password is too long';
    }
    return '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
