import {mountImage} from '../../js/static-image-demo.js';

// Uses the image already uploaded alongside this module.
export function mount(stage){
  return mountImage(stage,{
    src: './experiments/depth/hollow-face.png',
    alt: "Concave hollow face mask",
    revealSrc: './experiments/depth/hollow-face-reveal.png',
    revealAlt: 'Hollow face reveal showing the concave structure'
  });
}
