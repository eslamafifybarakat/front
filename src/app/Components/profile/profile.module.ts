import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from './home/home.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MyNotificationComponent } from './my-notification/my-notification.component';


@NgModule({
  declarations: [
    HomeComponent,
    MyProductsComponent,
    AddNewProductComponent,
    EditProfileComponent,
    EditProductComponent,
    MyNotificationComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }