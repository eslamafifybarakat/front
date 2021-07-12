import { Component, OnInit } from '@angular/core';
import  {AuthService} from '../../Services/auth.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private _AuthService : AuthService,private _Router:Router) { }
  error:string ='';
// validation 
  loginForm=new FormGroup({ 
    Email:new FormControl(null,[Validators.required,Validators.email]),
    Password:new FormControl(null,[Validators.required]),
  
   })

// method for log in
  submitLoginForm(loginForm:FormGroup){
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if(response.message == "success"){
        console.log(loginForm.value);
        
        localStorage.setItem('userToken',response.token);
        console.log("fjsdcndsckl,mvc");
        
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/home' ]) 
  
      }
      else{
        this.error=response.message
      }
    })
   }

  ngOnInit(): void {
  }

}
