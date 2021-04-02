import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMemberPageComponent } from './register-member-page.component';

describe('RegisterMemberPageComponent', () => {
  let component: RegisterMemberPageComponent;
  let fixture: ComponentFixture<RegisterMemberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMemberPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
