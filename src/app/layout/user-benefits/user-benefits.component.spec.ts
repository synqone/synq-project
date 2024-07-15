import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBenefitsComponent } from './user-benefits.component';

describe('UserBenefitsComponent', () => {
  let component: UserBenefitsComponent;
  let fixture: ComponentFixture<UserBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
