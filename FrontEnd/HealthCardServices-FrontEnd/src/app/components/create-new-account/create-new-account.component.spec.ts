import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateNewAccountComponent } from './create-new-account.component';

describe('CreateNewAccountComponent', () => {
  let component: CreateNewAccountComponent;
  let fixture: ComponentFixture<CreateNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should', waitForAsync(() => {
    spyOn(component, 'OnSubmit');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.OnSubmit).toHaveBeenCalled();
    });
  }));

});
