import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { Post } from './post.model';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API bia GET', () => {
    const dummyPosts: Post[] = [{
        userId: 'jtaylor',
        password: 'jtaylor12345'
        }];
    service.getPostData().subscribe(posts => {
        expect(posts.length).toBe(1);
        expect(posts).toEqual(dummyPosts);
    });
  });

    it('be able to retrieve posts from the API bia GET', () => {
      const dummyPosts: Post[] = [{
        userId: 'jtaylor',
        password: 'jtaylor12345'
        }];
      service.getPostData().subscribe(posts => {
          expect(posts.length).toBe(1);
          expect(posts).toEqual(dummyPosts);
      });
      const request = httpMock.expectOne( `${service.ROOT_URl}/posts`);
      expect(request.request.method).toBe('GET');
      request.flush(dummyPosts);
      });

      afterEach(() => {
        httpMock.verify();
        
    });
    
});
