import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, ToastService} from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { MembershipAgreementModalComponent } from 'src/app/parts/modals/membership-agreement-modal/membership-agreement-modal.component';

@Component({
  selector: 'app-register-member-page',
  templateUrl: './register-member-page.component.html',
  styleUrls: ['./register-member-page.component.scss']
})
export class RegisterMemberPageComponent implements OnInit {
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
      parent:             new FormGroup({
        name:             new FormGroup({
          sei:            new FormControl('', [Validators.required]),
          mei:            new FormControl('', [Validators.required]),
        }),
        nameRuby:         new FormGroup({
          seiRuby:        new FormControl('', [Validators.required, Validators.pattern('^[ァ-ヶー　]+$')]),
          meiRuby:        new FormControl('', [Validators.required, Validators.pattern('^[ァ-ヶー　]+$')]),
        }),
        prefCode:         new FormControl(0, [Validators.required]),
        tel:              new FormControl('', [Validators.required, Validators.pattern('\d{2,4}-?\d{2,4}-?\d{3,4}')]),
      }),
      student:            new FormGroup({
        name:             new FormGroup({
          sei:            new FormControl('', [Validators.required]),
          mei:            new FormControl('', [Validators.required]),
        }),
        nameRuby:         new FormGroup({
          seiRuby:        new FormControl('', [Validators.required, Validators.pattern('^[ァ-ヶー　]+$')]),
          meiRuby:        new FormControl('', [Validators.required, Validators.pattern('^[ァ-ヶー　]+$')]),
        }),
        birthday:         new FormGroup({
          bdYear:         new FormControl(0, Validators.required),
          bdMonth:        new FormControl(0, Validators.required),
          bdDay:          new FormControl(0, Validators.required),
        }),
        learningUsage:    new FormControl(0, Validators.required)
      })
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
