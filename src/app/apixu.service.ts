import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  // getCurrentIpLocation(): Observable<any> {
  //   return this.http.get('http://ipinfo.io')
  //   .map(response => response.json())
  //   .catch(error => {
  //       console.log(error);
  //       return Observable.throw(error.json());
  //   });
//}

  getWeather(location: any){
    
    return this.http.get(
      //'http://api.weatherstack.com/current?access_key=4a2f017b5a924173ac262244232008&query=' + location
      'https://api.weatherapi.com/v1/current.json?key=4a2f017b5a924173ac262244232008&query=' + location
   
      );
    // http://api.weatherstack.com/current?access_key=
    // 'http://api.apixu.com/v1/current.json?key=f30c45d70b98ea671e07479103d0cfb4&query=' + location
}

getcuntry() {
  return this.http.get<any>(
    //'http://api.weatherstack.com/current?access_key=4a2f017b5a924173ac262244232008&query=' + location
    'https://countriesnow.space/api/v0.1/countries'
    );
}


getStateFilter(filter: string): Observable<any> {
  const params = new HttpParams().set('filter', filter);
  return this.http.get(`https://countriesnow.space/api/v0.1/countries/states`, { params });
}

getauthAPI(){
  var options = {
    method: 'GET',
    headers:{
    "Accept": "application/json",
    "api-token": "JaoC8lAdNnABn57sOXvMJTXrXnTV-6KewOHvacEUTwbkvGHZ9kZCDkHSmqWOF5gCvjQ",
    "user-email": "tiwariankit0606@gmail.com"
    }
  } 
   return this.http.get("https://www.universal-tutorial.com/api/getaccesstoken",options);
  }

  getcountryAPI(Tokan:any){
    var options = {
      method: 'GET',
      headers:{
      "Authorization": "Bearer " + Tokan.auth_token,
      "Accept": "application/json"
      }
    } 
return this.http.get("https://www.universal-tutorial.com/api/countries/",options);
  }

  getState_cityAPI(Tokan:any,param:any,check:any){
    var options = {
      method: 'GET',
      headers:{
      "Authorization": "Bearer " + Tokan.auth_token,
      "Accept": "application/json"
      }
    } 
    if(check == 'STATE'){
return this.http.get("https://www.universal-tutorial.com/api/states/" + param,options);
    }
    else {
      return this.http.get("https://www.universal-tutorial.com/api/cities/" + param,options);
    }
  }


}

