import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MemberService} from '../../../shared/services';
import {ToastService} from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  styleUrls: ['./password-reset-page.component.scss']
})
export class PasswordResetPageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private memberService: MemberService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  sendMail() {
    if (this.form.valid) {
      this.memberService.sendPasswordResetEmail(this.emailInput.value)
        .then(() => {
          this.toast.success('メールが送信されました');
          this.form.reset();
        })
        .catch((err) => this.toast.error(err, 'エラーが発生しました'));
    }
  }

  get emailInput() { return this.form.get('email'); }

}
