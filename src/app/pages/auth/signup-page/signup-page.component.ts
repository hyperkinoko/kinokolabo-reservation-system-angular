import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MemberService} from '../../../shared/services';
import {MDBModalRef, MDBModalService, ToastService} from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MembershipAgreementModalComponent} from './membership-agreement-modal/membership-agreement-modal.component';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  signUpErrorMessage: string;
  form: FormGroup;

  basicModal: MDBModalRef;

  constructor(
    private router: Router,
    private memberService: MemberService,
    private toast: ToastService,
    private modalService: MDBModalService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      displayName:      new FormControl(null, [Validators.required]),
      email:            new FormControl(null, [Validators.required, Validators.email]),
      password:         new FormControl(null, [Validators.required]),
      passwordConfirm:  new FormControl(null, [Validators.required]),
      termsAccept:      new FormControl(false, [Validators.requiredTrue])
    });

  }


  signUp(): void {
    if (this.form.get('password').value !== this.form.get('passwordConfirm').value) {
      this.signUpErrorMessage = 'パスワードが異なります';
      return;
    }

    if (this.form.valid){
      this.memberService.signup(this.form.get('email').value, this.form.get('password').value, this.form.get('displayName').value)
        .then(() => {
          this.signUpErrorMessage = null;
          this.toast.success('送られたメールをご確認ください', 'メールを送信しました');
          this.router.navigate(['login']);
        })
        .catch(() => {
          this.signUpErrorMessage = 'サインアップに失敗しました。';
          this.form.setValue({password: null});
          this.form.setValue({passwordConfirm: null});
        });
    }
  }

  get displayNameInput() { return this.form.get('displayName'); }
  get emailInput() { return this.form.get('email'); }
  get passwordInput() { return this.form.get('password'); }
  get passwordConfirmInput() { return this.form.get('passwordConfirm'); }

  openMembershipAgreementModal() {
    this.basicModal = this.modalService.show(MembershipAgreementModalComponent, {scroll: true});
  }
}
