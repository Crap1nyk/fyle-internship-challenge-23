import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Userinfo } from './models/userinfo.model';
import { RepoInfo } from './models/repoInfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userinfo: Userinfo = new Userinfo('', '', '', '', '', '', 0); 
  counterArray: RepoInfo[] = [];
  currentPageNumber: number = 1;
  userName: string = '';
  pageSize: number = 10;
  isLoading: boolean = false;
  messageOnScreen: String = 'Welcome!';

  constructor(private apiService: ApiService) {}

  getCurrentPageNumber(currentPageNumber: number): void {
    this.currentPageNumber = currentPageNumber;
    this.setRepoInfoWithPagination(
      'johnpapa',
      this.pageSize,
      this.currentPageNumber
    );
  }

  getPageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.setRepoInfoWithPagination(
      'johnpapa',
      pageSize,
      this.currentPageNumber
    );
  }

  getSearchedText(userName: string) {
    this.isLoading = true;
    this.userName = userName;
    this.setUserInfoFromUserName(this.userName);
    this.setRepoInfoWithPagination(
      this.userName,
      this.pageSize,
      this.currentPageNumber
    );
  }

  ngOnInit() {}

  setRepoInfoWithPagination(
    userName: string,
    per_page: number,
    pageNumber: number
  ) {
    this.apiService.getRepos(userName, per_page, pageNumber).subscribe(
      (result: any) => {
        this.counterArray = [];
        result.map((repo: any) => {
          const repoInfo = new RepoInfo(
            repo.name,
            repo.id,
            repo.description,
            repo.topics
          );
          this.counterArray.push(repoInfo);
        });
      },
      (error: any) => {
        this.userName = '';
        this.userinfo = new Userinfo('', '', '', '', '', '', 0); 
        this.isLoading = false;
        this.messageOnScreen = 'OOPS! Something went wrong Try Again.';
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  setUserInfoFromUserName(userName: string) {
    this.apiService.getUser(userName).subscribe(
      (result: any) => {
        console.log(result);
        this.userinfo = new Userinfo(
          result.name ? result.name : result.login,
          result.location,
          result.avatar_url,
          result.bio,
          result.twitter_username,
          result.html_url,
          Math.ceil(result.public_repos / (this.pageSize * 1.0))
        );
      },
      (error: any) => {
        this.userName = '';
        this.counterArray = [];
        this.isLoading = false;
        this.messageOnScreen = 'OOPS! Something went wrong Try Again.';
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}