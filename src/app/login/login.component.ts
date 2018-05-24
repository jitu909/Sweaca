import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
login;
username:string='';
password:string='';
  constructor() { }

  ngOnInit() {
  this.login = new FormGroup({
	username : new FormControl("", Validators.required),
	password : new FormControl("", Validators.required)
	});
  }
  onSubmit(){
    this.username = this.login.get('username').value;
    this.password = this.login.get('password').value;
    if (this.username == 'jitesh' && this.password == 'jitesh') {
      // code...
    console.log(this.login.get('username').value);
    alert("Thank u for login");
    this.login.reset();
    }
    else{
      alert("Invalid Credentials");
      this.login.reset();
    }
  }
}
