import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
      'http://api.weatherstack.com/current?access_key=5e13b6cbb957b28a4ca3f370d27b9383&query=' + location
    );
    // http://api.weatherstack.com/current?access_key=
    // https://api.apixu.com/v1/current.json?key=f30c45d70b98ea671e07479103d0cfb4&query=New%20York
}
}

