import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  location:any;
  weatherData: any;

  constructor(private formBuilder: FormBuilder,private apixuService: ApixuService) { }

  ngOnInit(): void {

  
  }

  sendToAPIXU() {
    debugger;
    this.apixuService
    .getWeather(this.location)
    .subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
    console.log(this.location);
  }

}
