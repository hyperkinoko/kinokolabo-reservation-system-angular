import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipAgreementModalComponent } from './membership-agreement-modal.component';

describe('MembershipAgreementModalComponent', () => {
  let component: MembershipAgreementModalComponent;
  let fixture: ComponentFixture<MembershipAgreementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipAgreementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipAgreementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
