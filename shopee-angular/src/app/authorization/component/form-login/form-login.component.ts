import { Component, OnInit } from '@angular/core';
import {
  Validators ,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  loginInfo: any;

  constructor(
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
