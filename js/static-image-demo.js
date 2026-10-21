// Shared image renderer for approved image-backed phenomena.
export function mountImage(stage,{src,alt,revealSrc,revealAlt}){
  let revealed=false;
  const frame=document.createElement('div');
  frame.style.cssText='width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#101827;overflow:hidden;';
  const img=document.createElement('img');
  img.alt=alt;
  img.decoding='async';
  img.style.cssText='display:block;width:100%;height:100%;object-fit:contain;object-position:center;';
  frame.append(img);
  stage.replaceChildren(frame);
  function draw(){img.src=revealed&&revealSrc?revealSrc:src;img.alt=revealed&&revealSrc?(revealAlt||alt):alt;}
  draw();
  return {animated:false,play(){},pause(){},speed(){},
    reveal(){if(revealSrc){revealed=!revealed;draw()}return revealed},
    reset(){revealed=false;draw()},
    destroy(){stage.replaceChildren()}
  };
}
