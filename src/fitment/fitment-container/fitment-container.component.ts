import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.css']
})
export class FitmentContainerComponent implements OnInit {

years$: Observable<any>;

// import the store into the constructor
  constructor(
    private store: Store<fromStore.FitmentState>
  ) { }

  ngOnInit() {
  }

  getYears(){
    console.log('getYears')

    this.years$ = this.store.select(fromStore.getAllYears);

    // dispatch an action to get array of years
    
  }

}