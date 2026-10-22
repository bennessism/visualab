import {animate} from '../../js/animation-core.js';

// Genuine canvas animation: diagonal bands translate behind a tall, narrow aperture.
export function mount(stage, options) {
  return animate(stage, ({ctx,w,h,cx,cy,R,t,reveal}) => {
    const poleH = Math.min(h*.82, R*2.6);
    const poleW = Math.min(w*.37, poleH*.45);
    const x=cx-poleW/2, y=cy-poleH/2;

    ctx.fillStyle='#0b1425';
    ctx.fillRect(0,0,w,h);

    // The reference lines shown by Reveal make diagonal pattern motion easier to inspect.
    ctx.save();
    const radius=Math.min(poleW*.15,16);
    ctx.beginPath();
    ctx.roundRect(x,y,poleW,poleH,radius);
    ctx.clip();
    ctx.fillStyle='#f4f4f2';
    ctx.fillRect(x,y,poleW,poleH);

    // Bands move diagonally, although the window makes them appear to rise.
    const period=Math.max(24,poleW*.4);
    const offset=(t*65)%period;
    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(-Math.PI/4);
    const span=Math.max(w,h)*2;
    for(let i=-Math.ceil(span/period);i<=Math.ceil(span/period);i++){
      const p=i*period+offset;
      ctx.fillStyle=i%2===0?'#d53b47':'#79bfdd';
      ctx.fillRect(-span,p,span*2,period*.5);
    }
    ctx.restore();
    const shine=ctx.createLinearGradient(x,0,x+poleW,0);
    shine.addColorStop(0,'#00000035');shine.addColorStop(.24,'#ffffff1f');
    shine.addColorStop(.7,'#00000000');shine.addColorStop(1,'#00000055');
    ctx.fillStyle=shine;ctx.fillRect(x,y,poleW,poleH);
    ctx.restore();

    ctx.strokeStyle='#9dcfe8';ctx.lineWidth=Math.max(2,poleW*.012);
    ctx.strokeRect(x-1,y-1,poleW+2,poleH+2);
    if(reveal){
      ctx.strokeStyle='#8fe1bf';ctx.lineWidth=2;
      ctx.setLineDash([6,5]);ctx.beginPath();
      ctx.moveTo(x-poleW*.28,cy+poleH*.1);
      ctx.lineTo(x+poleW*1.28,cy-poleH*.1);
      ctx.stroke();ctx.setLineDash([]);
    }
  },options);
}