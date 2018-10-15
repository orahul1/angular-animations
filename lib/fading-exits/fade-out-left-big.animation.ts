import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const fadeOutLeftBig = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0  }),
      style({opacity: 0, transform: 'translate3d(-2000px, 0, 0)', easing: 'ease', offset: 1  })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeOutLeftBigAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'fadeOutLeftBig', [
    transition(
      '0 <=> 1',
      [
          useAnimation(fadeOutLeftBig, {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION
            }
          }),
      ]
    )
  ]);
}