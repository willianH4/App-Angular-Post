import { Component, OnInit } from '@angular/core';
import { CounterState } from '../../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;

  constructor(
    private store: Store<{ counter: CounterState }>
  ) { }

  ngOnInit(): void {
  }

  onAddValue() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

}
