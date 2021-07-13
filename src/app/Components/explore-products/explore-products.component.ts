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
    await this.myproduct.getCategoryFproduct().subscribe(res=>{
      this.product=res;
    },err=>{console.log(err)})
  }
  async getCat(data:string){
    await this.myproduct.SearchBCategoryTitle(data).subscribe(res=>{
      this.category=res;
      this.flag=false
      console.log(res)
    },err=>{console.log(err)})
  }
}
