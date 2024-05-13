import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Userinfo } from '../models/userinfo.model';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user information correctly', () => {
    // Arrange
    const userInfo: Userinfo = {
      name: 'John Doe',
      bio: 'Software Developer',
      location: 'New York',
      twitter_username: 'johndoe',
      avatar_url: 'https://example.com/avatar.jpg',
      html_url: 'https://example.com/johndoe',
      public_repos: 10,
    };
    component.userinfo = userInfo;

    // Act
    fixture.detectChanges();

    // Assert
    const compiled = fixture.nativeElement;

    // Check if user name is displayed
    expect(compiled.querySelector('.text-2xl').innerHTML).toContain('John Doe');

    // Check if user location is displayed

    expect(
      compiled.querySelector('.text-lg:nth-of-type(2)').innerHTML
    ).toContain('Software Developer');

    // Check if Twitter link is displayed with correct URL
    expect(
      compiled.querySelector('.text-lg.text-blue-500 a').getAttribute('href')
    ).toContain('https://twitter.com/johndoe');
  });
});
