import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBenefitsComponent } from './business-benefits.component';

describe('BusinessBenefitsComponent', () => {
  let component: BusinessBenefitsComponent;
  let fixture: ComponentFixture<BusinessBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
