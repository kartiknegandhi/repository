import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '../../../node_modules/@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  errorMessage: any;
  authloginObj: any;

loginObj = new Object;
loginRes: any;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.errorMessage = 'hi';
    if (localStorage.getItem('token')){
      this.router.navigateByUrl('/feedList');
    }
  }


//   loginz(): void {
//     console.log('auth service login' , this.model)
//     this.authenticationService.authlogin(this.model).subscribe(data => {
//       console.log(data)

//       this.loginRes = data;

//       console.log(this.loginRes)
//         let obj = <any>data;
//         if (obj && obj.error == 'invalid_grant') {
// console.log('invalid grant')
//       }
//       else{
//         console.log("Screen appears!");
//       }
//     }, error => 
//     {
//     console.log(error , 'error')
//     this.errorMessage = <any>error});
// }

login(){
  console.log(this.authenticationService.authlogin(this.model));
  this.errorMessage = this.authenticationService.authlogin(this.model);
  console.log('error block auth file')
  console.log(this.errorMessage)
  console.log(this.loginRes)
  
}





signUpPage(){
  console.log('signup now')
  this.router.navigate(['/signupDetails']);
}
}
