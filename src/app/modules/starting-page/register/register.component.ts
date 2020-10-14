import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    nick: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)])
  })
  
  hide = true;
  isEmailAvailable = true;
  isNickAvailable = true;

  checkEmailAvailibility = _.debounce(this.getEmailAvailibilityFromAPI, 1500);
  checkNickAvailibility = _.debounce(this.getNickAvailibilityFromAPI, 1500);


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
  
  getEmailAvailibilityFromAPI() {
    console.log('dupaAPI')
    this.authService.getConfig().subscribe(config => {
      this.authService.checkEmailAvailability(config.apiURL, this.form.get('email').value)
        .subscribe(
          response => {
            this.isEmailAvailable = true;
          },
          error => {
            this.isEmailAvailable = false;
          })
    })
  }

  getNickAvailibilityFromAPI() {
    this.authService.getConfig().subscribe(config => {
      this.authService.checkNickAvailability(config.apiURL, this.form.get('nick').value)
        .subscribe(
          response => {
            this.isNickAvailable = true;
          },
          error => {
            this.isNickAvailable = false;
          })
    })
  }

  onSubmit() {
    console.log(this.form);
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
