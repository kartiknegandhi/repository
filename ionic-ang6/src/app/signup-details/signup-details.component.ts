import { Component, OnInit } from '@angular/core';
import { SignupDetailsService } from './signup-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-details',
  templateUrl: './signup-details.component.html',
  styleUrls: ['./signup-details.component.scss']
})
export class SignupDetailsComponent implements OnInit {
signUpRes: any;
signUpData: any;
countries: any;
cities: any;
castes: any;
subcastes: any;
selectedCountry: any;
selectedCity: any;
selectedReligion: any;
selectedCaste: any;
religions: any;
password: any;
rePassword: any;
passMatch:Boolean = false;
signupObj:any;
signedUpRes:any;
  constructor(private router: Router ,  private signupDetailsService: SignupDetailsService) { }

  ngOnInit() {
    this.getPreSignup();
    this.signupObj= new Object;
  }

  getPreSignup() {
    this.signupDetailsService.getPreSignup().subscribe(
      res => {
        this.signUpRes = res;
        this.signUpData = this.signUpRes['data'];
        this.countries = this.signUpData['countries'];
        this.religions = this.signUpData['religions'];
        // this.page = this.getFeedlistRes['page']
        // this.mainFeedLists = this.feedLists;
        console.log(this.signUpRes);
        console.log(this.countries);
        this.countries.forEach(element => {
          console.log(element.countryName);
          
        });
      },
      res => {
        console.log('done loading error')
      }
    );
  }

  onCountrySelect(event){
  let placeObj = this.countries.find(obj => obj.countryName
    == this.selectedCountry)
    this.cities = placeObj.cities;
    console.log(this.cities)


  }

  onReligionSelect(event){
    let religionObj = this.religions.find(obj => obj.religionName
      == this.selectedReligion)
      this.castes = religionObj.caste;
      console.log(this.castes)
  
  
    }
    onCasteSelect(event){
      let casteObj = this.castes.find(obj => obj.casteName
        == this.selectedCaste)
        this.subcastes = casteObj.subcaste;
        console.log(this.subcastes)
    
    
      }
      matchPass(event){
        console.log(event.target.value)
        console.log(this.password)
        console.log(this.rePassword)

        if(this.password == event.target.value){
          console.log('matched')
this.passMatch = true;          
        }
        else {
          console.log('not matched')
          this.passMatch = false;          

        }
      }

      createAccount(username,password,email,selectedCountry,selectedCity,selectedReligion,selectedCaste,selectedSubcaste){
this.signupObj['username']= username;
this.signupObj['password']= password;
this.signupObj['email']= email;
this.signupObj['country']= selectedCountry;
this.signupObj['city']= selectedCity;
this.signupObj['religion']= selectedReligion;
this.signupObj['caste']= selectedCaste;
this.signupObj['subcaste']= selectedSubcaste;
        this.signupDetailsService.signup(this.signupObj).subscribe(
          res => {
            this.signedUpRes = res;

            // this.page = this.getFeedlistRes['page']
            // this.mainFeedLists = this.feedLists;
            console.log(this.signedUpRes);
            console.log('login successful');
            this.router.navigateByUrl('/feedList');


          },
          res => {
            console.log('done loading error')
          }
        );

      }
}
