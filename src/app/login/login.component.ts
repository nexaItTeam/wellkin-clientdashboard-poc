import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
constructor( private _fb: FormBuilder,){}

ngOnInit(): void {
  this.loginForm = this._fb.group({
    username: [null],
    password: [null]
  });
}
onSubmit(){}
}
