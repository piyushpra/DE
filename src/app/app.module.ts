import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LandPageComponent } from './Components/land-page/land-page.component';
import { StoreComponent } from './Components/store/store.component';
import { DatabaseComponent } from './Components/database/database.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GeoLocationComponent } from './geo-location/geo-location.component';
import { AdminPanelComponent } from './Components/admin/admin-panel/admin-panel.component';
import { AddProductComponent } from './Components/admin/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandPageComponent,
    StoreComponent,
    DatabaseComponent,
    ContactUsComponent,
    FooterComponent,
    GeoLocationComponent,
    AdminPanelComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
