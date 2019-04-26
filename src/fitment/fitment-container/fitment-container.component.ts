import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { LoadYears } from '../store/actions/vehicle.action'
import * as vehicleAction from '../store/actions/vehicle.action';

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.css']
})
export class FitmentContainerComponent implements OnInit {

years$: Observable<any>;

  constructor(
    private store: Store<fromStore.FitmentState>
  ) { }

  ngOnInit() {

  }

  getAllVehicleYears(){
    console.log('getYears')

    this.store.dispatch(new LoadYears());
    // this.store.dispatch(new vehicleAction.LoadYears());
    // this.store.dispatch(new fromStore.LoadYears());

    this.years$ = this.store.select(fromStore.getAllYears);

    
    
  }

}