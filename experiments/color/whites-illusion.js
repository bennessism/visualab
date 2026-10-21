import {mountImage} from '../../js/static-image-demo.js';

// Uses the image already uploaded alongside this module.
export function mount(stage){
  return mountImage(stage,{
    src: './experiments/color/whites-illusion.png',
    alt: "White's illusion"
  });
}
