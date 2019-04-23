import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.css']
})
export class FitmentContainerComponent implements OnInit {

years$: Observable<any>;

// import the store into the constructor
  constructor() { }

  ngOnInit() {
  }

  getYears(){
    console.log('getYears')

    // dispatch an action to get array of years
    
  }

}