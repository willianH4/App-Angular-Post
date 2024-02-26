import { Component, OnInit } from '@angular/core';
import { CounterState } from '../../state/counter.state';
import { Store } from '@ngrx/store';
import { changeAuthorName, customIncrement } from '../../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;
  authorName!: string;

  constructor(
    private store: Store<{ counter: CounterState }>
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      console.log('Channel name observable')
      this.authorName = data.author
    });
  }

  onAddValue() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  onChangeTextName() {
    this.store.dispatch(changeAuthorName());
  }

}
