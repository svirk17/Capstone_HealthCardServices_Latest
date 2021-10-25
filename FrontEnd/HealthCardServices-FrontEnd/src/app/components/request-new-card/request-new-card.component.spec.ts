import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewCardComponent } from './request-new-card.component';

describe('RequestNewCardComponent', () => {
  let component: RequestNewCardComponent;
  let fixture: ComponentFixture<RequestNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
