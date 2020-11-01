import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService) { 
  }

  form = new FormGroup({
    nick: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)])
  })
  
  hide = true;
  registerError = false;
  registerSuccess = false;
  errorMessages = [];

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
  
  onSubmit() {
    if(this.form.valid) {
      this.spinner.show();
      this.authService.getConfig().subscribe(config => {
        this.authService.register(this.form, config.apiURL)
          .subscribe(
            response => {
              this.registerError = false;
              this.registerSuccess = true;
              this.spinner.hide();
            },
            error => {
              this.registerError = true;
              this.registerSuccess = false;
              this.getRegisterErrorMessage(error.error);
              this.spinner.hide();
            })
      })
    }
  }

  getRegisterErrorMessage(error) {
    this.errorMessages = [];
    error.errors.forEach(element => {
      switch(element.param) {
        case 'email': {
          if(element.message == 'EMAIL_TAKEN') {
            this.errorMessages.push('This e-mail is already in use');
          }
          if(element.message == 'email') {
            this.errorMessages.push('Invalid e-mail format');
          }
          break;
        }
        case 'nick': {
          if(element.message == 'NICK_TAKEN') {
            this.errorMessages.push('This nick is already in use');
          }
          break;
        }
        default: {
          this.errorMessages.push('Something went wrong, please try again later')
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
