import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {
product:any;
total_payment:any;
num_days:number=0;
price_day:number=0;
buyer_id:any=localStorage.getItem('id');
operation:number=0;
  constructor(private myroute:ActivatedRoute,private myproduct:ProductService) {
    
   }

  ngOnInit(): void {
    this.getProduct(this.myroute.snapshot.params.id);
    this.operation = this.price_day * this.num_days;
  }
  async getProduct(id:any){
    return this.myproduct.getProduct(id).subscribe(
      (res)=>{this.product=res
        this.price_day =this.product.price_by_day},
      (err)=>{console.log(err)}
    )
  }


}
