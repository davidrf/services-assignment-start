import { EventEmitter } from '@angular/core';

export class CounterService {
  count = 0;

  constructor() { }

  countUpdated = new EventEmitter<void>();

  increaseCount() {
    this.count += 1;
    this.countUpdated.emit();
  }
}
