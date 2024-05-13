import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After each test, verifying that there are no outstanding HTTP requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUser with correct URL', () => {
    const username = 'testuser';
    const userData = { name: 'Test User' };

    service.getUser(username).subscribe((user) => {
      expect(user).toEqual(userData);
    });

    const req = httpTestingController.expectOne(
      `https://api.github.com/users/${username}`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(userData);
  });

  it('should call getRepos with correct URL and parameters', () => {
    const username = 'testuser';
    const perPage = 10;
    const pageNumber = 1;
    const reposData = [{ name: 'Repo 1' }, { name: 'Repo 2' }];

    service.getRepos(username, perPage, pageNumber).subscribe((repos) => {
      expect(repos).toEqual(reposData);
    });

    const req = httpTestingController.expectOne(
      `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${pageNumber}`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(reposData);
  });
});
