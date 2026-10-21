import {mountImage} from '../../js/static-image-demo.js';

// Uses the image already uploaded alongside this module.
export function mount(stage){
  return mountImage(stage,{
    src: './experiments/depth/ames-room.png',
    alt: "Ames room showing two people appearing dramatically different in size"
  });
}
