import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-explore-products',
  templateUrl: './explore-products.component.html',
  styleUrls: ['./explore-products.component.scss']
})
export class ExploreProductsComponent implements OnInit {
  product:any;
  category:any;
  flag:boolean=true;
  constructor(private myproduct:ProductService) { }

  ngOnInit(): void {
    this.getproduct()
  }
  async getproduct(){
    let x:any;
    await this.myproduct.getCategoryFproduct().subscribe(res=>{
     x = res;
     this.product = [];
      console.log(x);
      for (const pro of x) {
          if(pro.status=="available" && pro.status_adminstaration=="accepted"){
            this.product.push(pro);
          }
      }
    },err=>{console.log(err)})
  }
  async getCat(data:string){
    await this.myproduct.SearchBCategoryTitle(data).subscribe(res=>{
      let x:any;
      x = res;
      this.category = [];
      this.flag;
       console.log(x);
       for (const cat of x) {
           if(cat.status=="available" && cat.status_adminstaration=="accepted"){
             this.category.push(cat);
             this.flag=false
           }
       }
    },err=>{console.log(err)})
  }
}
