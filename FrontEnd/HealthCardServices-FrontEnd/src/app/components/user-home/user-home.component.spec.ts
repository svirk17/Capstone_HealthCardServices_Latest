import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UserHomeComponent } from './user-home.component';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ UserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  /*
  it('button click event one way', async(() => {
    spyOn(component, 'updateAccountInfo');

    let button = fixture.debugElement.nativeElement.querySelector('.btn.btn-primary.updateAccountInfo');
    button.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.updateAccountInfo).toHaveBeenCalled();
    });
  }));
  */


  it('UpdateAccount Info button is clicked', async(() => {
    
    spyOn(component, 'updateAccountInfo');
    let button = fixture.debugElement.query(By.css('.btn.btn-primary.updateAccountInfo')).nativeElement;
    
    button.click();
    fixture.detectChanges();
   // expect(fixture.debugElement.query(By.css('.header'))).toBeNull();

    fixture.whenStable().then(() => {
      expect(component.updateAccountInfo).toHaveBeenCalled();
      expect(component.updateAccountInfoFormVisible).toBe(true);
      expect(component.showRecommendation).toBe(true);
    });
  }));



});
