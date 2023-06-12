import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 

    name : string = '';
    username : string = '';
    password : string = '';
  
    user:Auth =new Auth();
    
  
    constructor(private authService: AuthService,private route:Router) { }
  
    ngOnInit(): void {
      this.username ='';
      this.password ='';
      this.name='';
    }
    signup(){
      this.user.username = this.username;
      this.user.password = this.password;
      this.user.name = this.name;
      this.user.role = 'user';
      this.authService.signup(this.user).subscribe(data => {
        if(data == null) {
          alert("Registration failed");
          this.ngOnInit();
        } else {
          console.log("Regsitration Usuccessful");
          alert("Registration successful");
          this.route.navigate(['/']);
        }
      }, error => {
        alert("Registration Failed");
        this.ngOnInit();
      })
    }
  

}
