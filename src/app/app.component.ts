import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  showGradient = false;
  showAfterLabel = false;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.showGradient = true;
    }, 1000);

    setTimeout(() => {
      this.showAfterLabel = true;
    }, 2000);
  }
}
