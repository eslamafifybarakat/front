import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { MyNotificationComponent } from './my-notification/my-notification.component';
import { MyProductsComponent} from './my-products/my-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: 'profile',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MyProductsComponent,
      },

      {
        path: 'myProducts',
        component: MyProductsComponent,
      },
      {
        path: 'myProducts/editProduct',
        component: EditProductComponent,
      },
      {
        path: 'addNewProduct',
        component: AddNewProductComponent,
      },
      {
        path: 'notification',
        component: MyNotificationComponent,
      },
      {
        path: 'editProfile',
        component: EditProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
