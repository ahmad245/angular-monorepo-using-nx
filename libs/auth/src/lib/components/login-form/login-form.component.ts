import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Authenticate } from '../../../../../data-models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ahmad-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  // tslint:disable-next-line: no-output-native
  @Output() submit = new EventEmitter<Authenticate>();
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }
  login() {
    
    
    this.submit.emit(this.loginForm.value);
  }
}
