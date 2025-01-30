import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LandPageComponent } from './Components/land-page/land-page.component';
import { StoreComponent } from './Components/store/store.component';
import { DatabaseComponent } from './Components/database/database.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandPageComponent,
    StoreComponent,
    DatabaseComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
