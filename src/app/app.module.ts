import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RandomBackgroundColorDirective } from './random-background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchResultsComponent,
    RandomBackgroundColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
