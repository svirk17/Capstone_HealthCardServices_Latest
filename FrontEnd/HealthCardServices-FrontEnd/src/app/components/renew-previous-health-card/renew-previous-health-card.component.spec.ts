import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RenewPreviousHealthCardComponent } from './renew-previous-health-card.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('RenewPreviousHealthCardComponent', () => {
  let component: RenewPreviousHealthCardComponent;
  let fixture: ComponentFixture<RenewPreviousHealthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        FormsModule,
        ToastrModule.forRoot()
      ],
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
