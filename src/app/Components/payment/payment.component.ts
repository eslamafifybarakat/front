import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentingService } from 'src/app/Services/renting.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
price:any;
email:any = localStorage.getItem('email')
  constructor(private myactivated:ActivatedRoute,private mypayment:RentingService,private router:Router) { 
    this.price = this.myactivated.snapshot.params.price;
  }
  buy(c_number:any,exp_number:any,exp_year:any,cvc:any){
    let data = {
      "c_number":c_number,
      "exp_number":exp_number,
      "exp_year":exp_year,
      "cvc":cvc,
      "email":this.email,
      "price":this.price
    }
    this.mypayment.PaymentOperation(data).subscribe((res)=>{
      console.log(res)
      window.alert('Success Payment')
      this.router.navigateByUrl('/home')
    },(err)=>{console.log(err)})
   
  }

  ngOnInit(): void {
  }

}
