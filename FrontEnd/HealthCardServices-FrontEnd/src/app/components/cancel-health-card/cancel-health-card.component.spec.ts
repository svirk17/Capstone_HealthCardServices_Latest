import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelHealthCardComponent } from './cancel-health-card.component';

describe('CancelHealthCardComponent', () => {
  let component: CancelHealthCardComponent;
  let fixture: ComponentFixture<CancelHealthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelHealthCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelHealthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
