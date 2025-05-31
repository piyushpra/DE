import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandPageComponent } from './Components/land-page/land-page.component';
import { StoreComponent } from './Components/store/store.component';
import { DatabaseComponent } from './Components/database/database.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AdminPanelComponent } from './Components/admin/admin-panel/admin-panel.component';
import { AddProductComponent } from './Components/admin/add-product/add-product.component';

const routes: Routes = [
  {
    path: "",
    component: LandPageComponent
  },{
    path: "store",
    component: StoreComponent
  },{
    path: "database",
    component: DatabaseComponent
  },{
    path: "contact",
    component: ContactUsComponent
  },{
    path: "admin",
    component: AdminPanelComponent
  },{
    path: "admin/addproduct",
    component: AddProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
