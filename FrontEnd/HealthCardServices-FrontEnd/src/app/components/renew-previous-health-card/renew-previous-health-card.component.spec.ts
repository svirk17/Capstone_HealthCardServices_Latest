import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPreviousHealthCardComponent } from './renew-previous-health-card.component';

describe('RenewPreviousHealthCardComponent', () => {
  let component: RenewPreviousHealthCardComponent;
  let fixture: ComponentFixture<RenewPreviousHealthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewPreviousHealthCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPreviousHealthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
