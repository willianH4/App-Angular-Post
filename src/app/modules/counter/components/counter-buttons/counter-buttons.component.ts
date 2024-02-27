import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../state/counter.actions';
import { Subscription } from 'rxjs';
import { AppState } from '../../../../core/data/interfaces';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit, OnDestroy {

  valueCounter?: number;
  counterSubcription?: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.counterSubcription = this.store.select('counter').subscribe(data => {
      this.valueCounter = data.counter;
    });
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    if( this.valueCounter! > 0 ) this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  ngOnDestroy(): void {
    if( this.counterSubcription ) this.counterSubcription.unsubscribe();
  }

}
