import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAccountInfoComponent } from './update-account-info.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpParams } from '@angular/common/http';

describe('UpdateAccountInfoComponent', () => {
  let component: UpdateAccountInfoComponent;
  let fixture: ComponentFixture<UpdateAccountInfoComponent>;
  let injector: TestBed;
  let service: UpdateAccountInfoComponent;
  let httpMock: HttpTestingController; 

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      declarations: [ UpdateAccountInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {  
    injector = getTestBed();
    service = injector.get(UpdateAccountInfoComponent);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  /*
  it('should return an Observable<SearchResults>', () => {
    service.OnSubmit('users', dummyParams)
      .subscribe(result => {
        expect(result.items.length).toBe(2);
      });
  
    const req = httpMock.expectOne(`${service.API_URL}/search/users?q=cironunes`);
    expect(req.request.url).toBe(`${service.API_URL}/search/users`);
    expect(req.request.params).toEqual(dummyParams);
  
    req.flush({
      incomplete_results: false,
      items: [{}, {}],
      total_count: 2
    });
  });
  */

});


