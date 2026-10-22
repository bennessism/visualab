import {animate} from '../../js/animation-core.js';

// Animated point-light biological motion, with normalized joint positions.
export function mount(stage,options){
  return animate(stage,({ctx,w,h,cx,cy,R,t,reveal})=>{
    ctx.fillStyle='#071021';ctx.fillRect(0,0,w,h);
    const s=Math.min(h*.77,w*.48)/230;
    const phase=t*2.1;
    const stride=Math.sin(phase);
    const swing=Math.sin(phase+Math.PI);
    const bounce=2.5*Math.cos(2*phase);
    const torsoX=0,hipY=34+bounce,shoulderY=-42+bounce;
    const p={
      head:[0,-85+bounce], neck:[0,-61+bounce],
      shoulderL:[-15,shoulderY],shoulderR:[15,shoulderY],
      elbowL:[-20-13*stride,-7+bounce+8*Math.max(0,stride)],
      elbowR:[20-13*swing,-7+bounce+8*Math.max(0,swing)],
      wristL:[-23-23*stride,28+bounce-13*Math.max(0,stride)],
      wristR:[23-23*swing,28+bounce-13*Math.max(0,swing)],
      hipL:[-11,hipY],hipR:[11,hipY],
      kneeL:[-11+27*stride,90+bounce-18*Math.max(0,-stride)],
      kneeR:[11+27*swing,90+bounce-18*Math.max(0,-swing)],
      ankleL:[-11+42*stride,143+bounce-27*Math.max(0,-stride)],
      ankleR:[11+42*swing,143+bounce-27*Math.max(0,-swing)]
    };
    ctx.save();ctx.translate(cx,cy-h*.07);ctx.scale(s,s);
    if(reveal){
      ctx.strokeStyle='#78d0df88';ctx.lineWidth=2;ctx.lineCap='round';
      for(const [a,b] of [['neck','shoulderL'],['neck','shoulderR'],['neck','hipL'],['neck','hipR'],['shoulderL','elbowL'],['elbowL','wristL'],['shoulderR','elbowR'],['elbowR','wristR'],['hipL','kneeL'],['kneeL','ankleL'],['hipR','kneeR'],['kneeR','ankleR']]){
        ctx.beginPath();ctx.moveTo(...p[a]);ctx.lineTo(...p[b]);ctx.stroke();
      }
    }
    for(const [name,[x,y]] of Object.entries(p)){
      ctx.fillStyle=name==='head'?'#ffd78b':'#e9f7ff';
      ctx.beginPath();ctx.arc(x,y,name==='head'?5.8:4.5,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();
  },options);
}