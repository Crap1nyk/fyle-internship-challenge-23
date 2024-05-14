import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BodyComponent } from './body-components/body-component.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent,SearchBarComponent,PaginationComponent,BodyComponent,DropdownMenuComponent],
      providers: [HttpClient, HttpHandler],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});