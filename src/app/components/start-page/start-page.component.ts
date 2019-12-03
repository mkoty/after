import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements AfterViewInit {
  @Output() imagesLoaded = new EventEmitter();

  counter = 0;
  delay = 1000;
  numberOfImagesOnPage = 3;

  loadedImageCounter = 0;

  showLabelConture = false;
  showTransparentX = false;
  showText = false;
  backgroundLoaded = false;
  xFilled = false;
  animationStarts = false;
  backgroundTransitionEnded = false;

  get showBackgroundByCounter(): boolean {
    return this.counter % 2 === 1;
  }

  get allImagesLoaded(): boolean {
    return this.loadedImageCounter === this.numberOfImagesOnPage;
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.increment();
  }

  increment() {
    setTimeout(() => {
      this.counter++;
      if (this.allImagesLoaded && this.showBackgroundByCounter) {
        return;
      }
      this.increment();
    }, this.delay);
  }

  onBackgroundTransitionEnded() {
    if (this.showBackgroundByCounter) {
      this.backgroundTransitionEnded = true;
      this.tryToStartAnimation();
    }
  }

  tryToStartAnimation() {
    if (this.allImagesLoaded && this.showBackgroundByCounter && this.backgroundTransitionEnded && !this.animationStarts) {
      this.startAnimation();
    }
  }

  startAnimation() {
    this.animationStarts = true;

    setTimeout(() => {
      this.showTransparentX = true;
    }, 500);

    setTimeout(() => {
      this.showLabelConture = true;
    }, 2000);

    setTimeout(() => {
      this.showText = true;
    }, 3000);
  }

  backgroundLoadingEnd() {
    this.backgroundLoaded = true;
  }

  xFillingOutEnd() {
    this.xFilled = true;
  }

  onImageLoaded() {
    this.loadedImageCounter++;
    this.tryToStartAnimation();
  }
}
