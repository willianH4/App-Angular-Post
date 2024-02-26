import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  valueCounter?: number;

  constructor(
    private store: Store<{ counter: { counter: number } }>
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
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

}
