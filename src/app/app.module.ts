import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BodyComponent } from './body-components/body-component.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultPageComponent } from './default-page/default-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CardComponent,
    PaginationComponent,
    SearchBarComponent,
    DropdownMenuComponent,
    SkeletonLoaderComponent,
    DefaultPageComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}