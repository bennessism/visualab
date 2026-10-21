import {mountImage} from '../../js/static-image-demo.js';

// Uses the image already uploaded alongside this module.
export function mount(stage){
  return mountImage(stage,{
    src: './experiments/ambiguous/duck-rabbit.png',
    alt: "Classic ambiguous duck and rabbit drawing"
  });
}
