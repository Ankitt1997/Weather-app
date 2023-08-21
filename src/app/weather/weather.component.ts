import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";
import { HttpClient, HttpParams } from '@angular/common/http';

declare var $: any;


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  location:any;
  weatherData: any;
  AllCountry:any;
  AllState:any;
  Allcity:any
  Countryname:any;
  Statename:any;
  Cityname:any;
  Tokan:any

  constructor(private formBuilder: FormBuilder,private apixuService: ApixuService, private http: HttpClient) { }

  ngOnInit(): void {
    this.authnticationtokan();
//this.getcountry();
  
  }
  onSelectCountry(a:any){
    let that = this;
    console.log(that.Countryname);
    this.getStateAPI(a);
    debugger;
    
  }
  onSelectState(b:any){
    let that = this;
    console.log(that.Statename);
    this.getCityAPI(b)
  }

  sendToAPIXU() {
    debugger;
  if(this.Cityname != undefined){
this.location = this.Cityname+','+this.Statename+','+this.Countryname;
  } else if (this.Statename != undefined){
    this.location = this.Statename+','+this.Countryname;
  }
  else {
    this.location = this.Countryname;
  }
    this.apixuService
    .getWeather(this.location)
    .subscribe(res => {
      this.weatherData = res;
      console.log(this.weatherData);
    });
    console.log(this.location);
  }

// getcountry() {
//   debugger;
//     this.apixuService
//     .getcuntry()
//     .subscribe(res => {
//       this.AllCountry =  res;
//       console.log(this.AllCountry);
//     });
// }


authnticationtokan(){
  this.apixuService
  .getauthAPI()
  .subscribe(res => {
    this.Tokan=  res;
    console.log(this.Tokan);
    this.getCountryAPI(this.Tokan);
  });
}
getCountryAPI(abc:any){
  this.apixuService
  .getcountryAPI(abc)
  .subscribe(res => {
    this.AllCountry =  res;
    console.log(this.AllCountry);
  });
}
getStateAPI(state:any){
  this.apixuService
  .getState_cityAPI(this.Tokan, state, 'STATE')
  .subscribe(res => {
    this.AllState = res;
    console.log(this.AllState);
  });
  console.log(this.AllState);
}
getCityAPI(city:any){
  this.apixuService
  .getState_cityAPI(this.Tokan, city, 'CITY')
  .subscribe(res => {
    this.Allcity= res;
    console.log(this.Allcity);
  });
  console.log(this.Allcity);
}

}


