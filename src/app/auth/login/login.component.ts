import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username : string = '';
  password : string = '';
  role : string = '';
  roles : string[];

  user:Auth =new Auth();

  constructor(private authService: AuthService,private route:Router){
    this.roles=[
      'admin',
      'user'
    ]
  }
  ngOnInit(): void {
    this.username ='';
    this.password ='';
    
  }
  login(){
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.role = this.role;
    this.authService.login(this.user).subscribe(data => {
      if(data == null) {
        alert("Username/Password is wrong");
        this.ngOnInit();
      } else {
        console.log("Login Successful");
        localStorage.setItem("token", data.token);
        if(this.role == "user") {
          this.route.navigate(['/user']);
        }
        if(this.role == "admin") {
          this.route.navigate(['/admin'])
        }
      }
    }, error => {
      alert("Login Failed");
      this.ngOnInit();
    })
  }

}
