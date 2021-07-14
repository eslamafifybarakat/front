import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  category:any;
  formData: FormData = new FormData();
  constructor(private myservice:CategoryService,private myproductservice:ProductService,private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
  }
  async getCategory(){
    return await this.myservice.getAllCategory().subscribe(
      (res)=>{this.category=res},
      (err)=>{console.log(err)},
    )
  }
  async AddProduct(title:any,desc:any,price:any,cat_title:any,files:any){
    let emailuser:any = localStorage.getItem('email');//by useing session
    this.formData.append('photo',files[0]); 
    this.formData.append('title',title); 
    this.formData.append('image',files[0].name); 
    this.formData.append('desc',desc); 
    this.formData.append('price_by_day',price); 
    let data = await this.myproductservice.AddProduct(this.formData,cat_title,emailuser).subscribe((res)=>{console.log(res)},(err)=>{console.log(err)})
    window.location.href= '/profile/profile/myProducts';
    // this.router.navigateByUrl('/profile/profile/myProducts')

  }

}
