import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginErrorMessage: string;

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private memberService: MemberService
  ) {}

  ngOnInit() {
  }

  get emailInput() { return this.form.get('email'); }
  get passwordInput() { return this.form.get('password'); }

  login() {
    if (this.form.valid) {
      this.memberService.login(this.form.get('email').value, this.form.get('password').value)
        .then(() => {
          this.loginErrorMessage = null;
          this.router.navigate(['']);
        })
        .catch((err) => {
          this.loginErrorMessage = 'ログインに失敗しました。';
          this.form.setValue({password: null});
        });
    }
  }
}
