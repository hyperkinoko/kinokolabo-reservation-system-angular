import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, ToastService} from 'ng-uikit-pro-standard';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { MembershipAgreementModalComponent } from 'src/app/parts/modals/membership-agreement-modal/membership-agreement-modal.component';

@Component({
  selector: 'app-register-member-page',
  templateUrl: './register-member-page.component.html',
  styleUrls: ['./register-member-page.component.scss']
})
export class RegisterMemberPageComponent implements OnInit {
  registerErrorMessage: string;
  form: FormGroup;

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
        learningUsage:    new FormArray(null, Validators.required)
      })
    });
  }


  signUp(): void {
    if (this.form.get('password').value !== this.form.get('passwordConfirm').value) {
      this.registerErrorMessage = 'パスワードが異なります';
      return;
    }

    if (this.form.valid){
      this.memberService.signup(this.form.get('email').value, this.form.get('password').value, this.form.get('displayName').value)
        .then(() => {
          this.registerErrorMessage = null;
          this.toast.success('送られたメールをご確認ください', 'メールを送信しました');
          this.router.navigate(['login']);
        })
        .catch(() => {
          this.registerErrorMessage = 'サインアップに失敗しました。';
          this.form.setValue({password: null});
          this.form.setValue({passwordConfirm: null});
        });
    }
  }

  get groupParent(): FormGroup { return this.form.get('parent') as FormGroup; }
  get groupParentName(): FormGroup { return this.groupParent.get('name') as FormGroup; }
  get inputParentNameSei(): FormControl { return this.groupParentName.get('sei') as FormControl; }
  get inputParentNameMei(): FormControl { return this.groupParentName.get('mei') as FormControl; }
  get groupParentNameRuby(): FormGroup { return this.groupParent.get('nameRuby') as FormGroup; }
  get inputParentNameRubySei(): FormControl { return this.groupParentNameRuby.get('sei') as FormControl; }
  get inputParentNameRubyMei(): FormControl { return this.groupParentNameRuby.get('mei') as FormControl; }
  get inputPrefCode(): FormControl { return this.groupParent.get('pref') as FormControl; }
  get inputTel(): FormControl { return this.groupParent.get('tel') as FormControl; }
  get groupStudent(): FormGroup { return this.form.get('student') as FormGroup; }
  get groupStudentName(): FormGroup { return this.groupStudent.get('name') as FormGroup; }
  get inputStudentNameSei(): FormControl { return this.groupStudentName.get('sei') as FormControl; }
  get inputStudentNameMei(): FormControl { return this.groupStudentName.get('mei') as FormControl; }
  get groupStudentNameRuby(): FormGroup { return this.groupStudent.get('nameRuby') as FormGroup; }
  get inputStudentNameRubySei(): FormControl { return this.groupStudentNameRuby.get('sei') as FormControl; }
  get inputStudentNameRubyMei(): FormControl { return this.groupStudentNameRuby.get('mei') as FormControl; }
  get groupStudentBirthday(): FormGroup { return this.groupStudent.get('birthday') as FormGroup; }
  get inputStudentBirthdayYear(): FormControl {return this.groupStudentBirthday.get('bdYear') as FormControl; }
  get inputStudentBirthdayMonth(): FormControl {return this.groupStudentBirthday.get('bdMonth') as FormControl; }
  get inputStudentBirthdayDay(): FormControl {return this.groupStudentBirthday.get('bdDay') as FormControl; }
  get inputStudentLearningUsage(): FormArray {return this.groupStudent.get('learningUsage') as FormArray; }
}
