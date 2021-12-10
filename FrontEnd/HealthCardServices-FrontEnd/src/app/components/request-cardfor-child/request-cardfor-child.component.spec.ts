import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardforChildComponent } from './request-cardfor-child.component';

describe('RequestCardforChildComponent', () => {
  let component: RequestCardforChildComponent;
  let fixture: ComponentFixture<RequestCardforChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCardforChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCardforChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
