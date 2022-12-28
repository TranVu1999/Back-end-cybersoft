import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators ,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  loginInfo: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginInfo = this.formBuilder.group({
      loginName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  // Handle Events
  handleLogin(): void {
    // this.router.navigateByUrl('/customer');
    console.log('loginInfo: ', this.loginInfo.value);
  }

}
