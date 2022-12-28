import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  loginInfo = new FormGroup({
    loginName: new FormControl(
      '',
      
    ),
    password: new FormControl('')
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Handle Events
  handleLogin(): void {
    // this.router.navigateByUrl('/customer');
    console.log('loginInfo: ', this.loginInfo.value);
  }

}
