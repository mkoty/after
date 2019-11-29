import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  showGradient = false;
  showAfterLabel = false;
  showLabelConture = false;
  showText = false;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.showGradient = true;
    }, 1000);

    setTimeout(() => {
      this.showAfterLabel = true;
    }, 2000);

    setTimeout(() => {
      this.showLabelConture = true;
    }, 3000);

    setTimeout(() => {
      this.showText = true;
    }, 4000);
  }
}
