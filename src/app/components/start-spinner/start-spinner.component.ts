import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-spinner',
  templateUrl: './start-spinner.component.html',
  styleUrls: ['./start-spinner.component.scss']
})
export class StartSpinnerComponent implements OnInit {
  @Input() width = null;
  @Input() height = null;

  counter = 0;
  delay = 1000;

  constructor() { }

  ngOnInit() {
    this.increment();
  }

  increment() {
    setTimeout(() => {
      this.counter++;
      this.increment();
    }, this.delay);
  }

}
