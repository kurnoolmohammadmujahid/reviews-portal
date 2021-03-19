import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerCallsService } from '../../../services/server-calls.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginObj = {
    email: '',
    password: ''
  }
  id: any;
  createLoginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private apiCall: ServerCallsService,
    private route: Router) {
    this.createLoginForm = this.fb.group({
      id: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/\S+@hcl.com/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W)/)]]
    });
  }

  ngOnInit(): void { }

  loginAuthentication() {
    console.log(this.createLoginForm.value);
    this.loginObj.email = this.createLoginForm.value.email;
    this.loginObj.password = this.createLoginForm.value.password;
    this.id = this.createLoginForm.value.id;
    if (this.id == "1") {
      this.apiCall.getShopOwnerLoginCredentials().then(data => {
        console.log(data);
        for (let profile of data) {
          if (profile.email === this.loginObj.email && profile.password === this.loginObj.password) {
            sessionStorage.setItem('id', 'shopOwner')
            this.route.navigate(['/reviews']);
          }
        }
      });
    } else {
      this.apiCall.getCustomerLoginCredentials().then(data => {
        console.log(data);
        for (let profile of data) {
          if (profile.email === this.loginObj.email && profile.password === this.loginObj.password) {
            sessionStorage.setItem('id', 'customer')
            this.route.navigate(['/reviews']);
          }
        }
      });
    }
  }

}
