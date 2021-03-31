import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageHeaderComponent } from './auth-page-header.component';

describe('AuthPageHeaderComponent', () => {
  let component: AuthPageHeaderComponent;
  let fixture: ComponentFixture<AuthPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
