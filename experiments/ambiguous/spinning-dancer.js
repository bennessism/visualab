// The same proportional silhouette renders in the small card and the full experiment.
import {animate} from '../../js/animation-core.js';
export function mount(stage,options){
 return animate(stage,({ctx,cx,cy,R,t,reveal})=>{
  ctx.save();ctx.translate(cx,cy+R*.1);const unit=R/115;ctx.scale(unit,unit);
  const sx=Math.cos(t);ctx.scale(Math.abs(sx)<.05?(sx<0?-.05:.05):sx,1);
  ctx.fillStyle='#dcc8ff';ctx.strokeStyle='#dcc8ff';ctx.lineCap='round';ctx.lineJoin='round';
  ctx.beginPath();ctx.arc(0,-89,14,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.moveTo(-9,-73);ctx.quadraticCurveTo(-20,-50,-11,-25);ctx.lineTo(-14,5);ctx.quadraticCurveTo(3,13,18,2);ctx.lineTo(12,-28);ctx.quadraticCurveTo(13,-54,7,-73);ctx.closePath();ctx.fill();
  ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-10,-56);ctx.lineTo(-45,-32);ctx.lineTo(-69,-21);ctx.moveTo(12,-57);ctx.lineTo(39,-73);ctx.lineTo(55,-63);ctx.stroke();
  ctx.beginPath();ctx.moveTo(-13,-10);ctx.lineTo(-42,27);ctx.quadraticCurveTo(0,43,41,27);ctx.lineTo(16,-10);ctx.closePath();ctx.fill();
  ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(-11,29);ctx.lineTo(-21,69);ctx.lineTo(-40,91);ctx.moveTo(12,29);ctx.lineTo(31,70);ctx.lineTo(53,86);ctx.stroke();ctx.restore();
  if(reveal){ctx.fillStyle='#93dff0';ctx.font='12px system-ui';ctx.textAlign='center';ctx.fillText('Ambiguous silhouette projection',cx,cy+R+20)}
 },options);
}