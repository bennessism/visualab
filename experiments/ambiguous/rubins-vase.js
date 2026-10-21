import {mountImage} from '../../js/static-image-demo.js';

// Uses the image already uploaded alongside this module.
export function mount(stage){
  return mountImage(stage,{
    src: './experiments/ambiguous/rubins-vase.png',
    alt: "Rubin vase and two opposing face profiles"
  });
}
