import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('in', style({ opacity: 1 })),
  transition('void => *', [style({ opacity: 0 }), animate('.3s {{ animationDelay }}ms ease-in')], { params: { animationDelay: '0' } }),
  transition('* => void', [animate('.3s ease-out', style({ opacity: 0 }))])
]);
