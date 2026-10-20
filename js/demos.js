const NS='http://www.w3.org/2000/svg';
const wrap=(body,view='0 0 600 360')=>'<svg viewBox="'+view+'" xmlns="'+NS+'" role="img" aria-label="Visual perception demonstration">'+body+'</svg>';
const line=(x1,y1,x2,y2,color='#caeaff',width=4)=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+color+'" stroke-width="'+width+'" stroke-linecap="round"/>';
const circ=(x,y,r,fill)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+fill+'"/>';
const rect=(x,y,w,h,fill)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+fill+'"/>';
const poly=(points,fill='none',stroke='#bde7ff',sw=3)=>'<polygon points="'+points+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+sw+'" stroke-linejoin="round"/>';
export function renderStatic(id,stage,reveal=false){
 const blue='#9cdef8',gold='#ffb469',pink='#ec9bcf';
 let s='';
 if(id==='necker-cube'){const a=[[210,80],[390,80],[390,258],[210,258]],b=[[270,119],[450,119],[450,297],[270,297]];for(let i=0;i<4;i++){let j=(i+1)%4;s+=line(...a[i],...a[j],blue,4)+line(...b[i],...b[j],blue,4)+line(...a[i],...b[i],blue,4)}}
 else if(id==='rubins-vase'){s=rect(0,0,600,360,'#111726')+'<path fill="#f2ecdf" d="M243 0 C238 35 234 49 247 65 L252 76 C256 82 252 91 246 101 L238 113 C234 119 240 125 249 128 L254 133 C258 139 254 145 246 149 C236 155 238 164 246 171 C259 181 268 191 270 216 C273 250 250 284 246 310 Q244 337 226 360 L374 360 Q356 337 354 310 C350 284 327 250 330 216 C332 191 341 181 354 171 C362 164 364 155 354 149 C346 145 342 139 346 133 L351 128 C360 125 366 119 362 113 L354 101 C348 91 344 82 348 76 L353 65 C366 49 362 35 357 0 Z"/>'}
 else if(id==='duck-rabbit'){s='<path d="M100 150 L34 133 L95 163 L40 191 L112 184 Q135 205 158 219 Q180 240 217 241 Q240 279 282 283 Q337 286 377 259 Q427 226 420 179 Q416 126 363 107 Q316 92 278 111 Q250 124 232 118 Q210 106 191 111 L125 77 L158 136 L85 102 Z" fill="#d9c7f1" stroke="#7aa5d9" stroke-width="5" stroke-linejoin="round"/>'+circ(289,160,7,'#19243a')}
 else if(id==='simultaneous-contrast'){s=rect(40,38,250,284,'#e0e7ec')+rect(310,38,250,284,'#283344')+rect(115,126,100,100,'#888888')+rect(385,126,100,100,'#888888');if(reveal)s+=line(215,177,385,177,'#f49cbd',3)}
 else if(id==='checker-shadow'){for(let y=0;y<5;y++)for(let x=0;x<7;x++)s+=rect(80+x*64,22+y*64,64,64,(x+y)%2?'#687b8b':'#b9c8d0');s+='<path d="M305 20 L535 20 L445 342 L230 342 Z" fill="#081321" opacity=".43"/>'+circ(240,180,13,'none')+'<circle cx="240" cy="180" r="17" fill="none" stroke="#ffab81" stroke-width="4"/>';if(reveal)s+=rect(220,154,60,54,'#888')}
 else if(id==='whites-illusion'){for(let i=0;i<12;i++)s+=rect(50+i*42,20,42,320,i%2?'#e8edf3':'#243142');s+=rect(134,116,84,120,'#999')+rect(365,116,84,120,'#999')}
 else if(id==='muller-lyer'){for(const [y,dir] of [[111,1],[257,-1]]){s+=line(155,y,445,y,blue,5);for(const x of [155,445]){s+=line(x,y,x+dir*(x===155?1:-1)*38,y-48,gold,5)+line(x,y,x+dir*(x===155?1:-1)*38,y+48,gold,5)}}if(reveal)s+=line(155,65,155,302,'#85e6b4',2)+line(445,65,445,302,'#85e6b4',2)}
 else if(id==='ponzo'){s+=line(60,335,260,18,'#dcbaff',4)+line(540,335,340,18,'#dcbaff',4)+line(207,112,393,112,gold,8)+line(207,260,393,260,gold,8)}
 else if(id==='ebbinghaus'){for(const [cx,r,dist,n] of [[180,29,93,7],[420,54,116,7]]){for(let i=0;i<n;i++){let a=i*2*Math.PI/n;s+=circ(cx+dist*Math.cos(a),180+dist*Math.sin(a),r,'#86b8ea')}s+=circ(cx,180,33,gold)}}
 else if(id==='cafe-wall'){s=rect(50,26,500,306,'#737c8e');for(let y=0;y<8;y++)for(let x=-1;x<9;x++)s+=rect(50+x*70+(y%2?35:0),28+y*38,69,34,'#131f2d')}
 else if(id==='troxler-fading'){s+=circ(300,180,3,'white');for(let i=0;i<17;i++){let a=i*2*Math.PI/17,r=85+(i%3)*29;s+=circ(300+r*Math.cos(a),180+r*Math.sin(a),11+(i%4)*4,'#7797af66')}s+=line(290,180,310,180,'#fff',2)+line(300,170,300,190,'#fff',2)}
 else if(id==='blind-spot'){s+=line(137,180,163,180,'white',5)+line(150,167,150,193,'white',5)+circ(440,180,15,gold)}
 else if(id==='hollow-face'){s+='<ellipse cx="300" cy="176" rx="115" ry="145" fill="#798aa2"/><path d="M300 40 Q425 88 409 220 Q388 294 300 320 Q218 288 195 220 Q179 88 300 40Z" fill="#ced9e5"/><path d="M221 145 Q257 114 287 148 M313 148 Q344 114 378 145" fill="none" stroke="#5c7386" stroke-width="10"/>'+circ(252,159,9,'#405a71')+circ(344,159,9,'#405a71')+'<path d="M299 165 L283 228 L313 228 M259 266 Q300 290 344 266" fill="none" stroke="#657b90" stroke-width="8"/>'}
 else if(id==='ames-room'){s=poly('60,65 528,28 478,314 93,305','#26374d','#95c7e2',4)+poly('60,65 215,125 93,305','#1b293c','#95c7e2',3)+poly('528,28 365,125 478,314','#162437','#95c7e2',3)+line(215,125,365,125,'#95c7e2',3)+line(93,305,478,314,'#95c7e2',3)+circ(215,159,19,gold)+rect(202,177,26,91,gold)+circ(387,185,11,pink)+rect(379,196,17,49,pink)}
 else if(id==='impossible-trident'){s='<path d="M110 115 H350 Q388 115 388 151 V210 M110 180 H326 Q365 180 365 218 V250 M110 245 H400 Q440 245 440 201 V150" fill="none" stroke="#a8daee" stroke-width="35" stroke-linecap="round"/>'}
 else if(id==='peripheral-drift'){for(let k=0;k<5;k++){let cx=107+k*99;for(let i=0;i<24;i++){let a=i*Math.PI/12,r=62;s+='<path d="M'+(cx+r*Math.cos(a)).toFixed(1)+' '+(180+r*Math.sin(a)).toFixed(1)+' A62 62 0 0 1 '+(cx+r*Math.cos(a+Math.PI/12)).toFixed(1)+' '+(180+r*Math.sin(a+Math.PI/12)).toFixed(1)+'" stroke="'+['#fbf5d8','#14182a','#2f92cd','#d4a34d'][i%4]+'" stroke-width="17" fill="none"/>'}}}
 else if(id==='contrast'){s=rect(40,40,240,280,'#eee')+rect(320,40,240,280,'#303745')+rect(114,130,90,90,'#888')+rect(394,130,90,90,'#888')}
 else {s=circ(300,180,105,'#34516b')+circ(260,155,25,gold)+circ(345,208,25,blue)}
 stage.innerHTML=wrap(s);
}
export function mountDemo(id,stage,{motionAllowed=true}={}){
 let active=true,playing=motionAllowed,raf=0,frame=0,speed=50,reveal=false;
 const animated=['ambiguous-rotation','kinetic-depth','motion-aftereffect','wagon-wheel','spinning-dancer','afterimage','motion-induced-blindness','change-blindness'].includes(id);
 let canvas,ctx;
 if(animated){canvas=document.createElement('canvas');stage.append(canvas);ctx=canvas.getContext('2d')}
 else renderStatic(id,stage);
 function draw(){
 if(!active)return;
 if(animated){
 const r=stage.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2),w=Math.max(100,r.width),h=Math.max(100,r.height);
 if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr)}
 ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);let cx=w/2,cy=h/2,R=Math.min(w,h)*.32,t=frame*(speed/50)*.016;
 if(id==='ambiguous-rotation'||id==='kinetic-depth'){ctx.strokeStyle='#4a607d';ctx.lineWidth=1;ctx.beginPath();ctx.arc(cx,cy,R,0,7);ctx.stroke();for(let i=0;i<220;i++){let y=1-2*(i+.5)/220,a=i*2.39996323,rad=Math.sqrt(1-y*y),x=rad*Math.cos(a+t),z=rad*Math.sin(a+t);ctx.fillStyle=reveal?(z>0?'#9dedfb':'#365d84'):'#8adcf4';ctx.beginPath();ctx.arc(cx+x*R,cy+y*R,reveal?2+1.2*z:2.2,0,7);ctx.fill()}}
 else if(id==='motion-aftereffect'){const stripeW=30,cycle=stripeW*2,offset=((frame*(speed/50)*2.2)%cycle+cycle)%cycle;for(let x=-cycle;x<w+cycle;x+=cycle){ctx.fillStyle='#182841';ctx.fillRect(x-offset,0,stripeW,h);ctx.fillStyle='#8ee2f8';ctx.fillRect(x+stripeW-offset,0,stripeW,h)}ctx.strokeStyle='#f3f7fc';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx-10,cy);ctx.lineTo(cx+10,cy);ctx.moveTo(cx,cy-10);ctx.lineTo(cx,cy+10);ctx.stroke()}
 else if(id==='wagon-wheel'){ctx.save();ctx.translate(cx,cy);ctx.rotate(t);ctx.strokeStyle='#bce6f7';ctx.lineWidth=5;ctx.beginPath();ctx.arc(0,0,R,0,7);ctx.stroke();for(let i=0;i<12;i++){let a=i*Math.PI/6;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(R*Math.cos(a),R*Math.sin(a));ctx.stroke()}ctx.restore()}
 else if(id==='spinning-dancer'){ctx.save();ctx.translate(cx,cy+10);const sx=Math.max(.16,Math.abs(Math.cos(t)));ctx.scale(sx,1);ctx.fillStyle='#dcc8ff';ctx.strokeStyle='#dcc8ff';ctx.lineWidth=12;ctx.beginPath();ctx.arc(0,-R*.78,18,0,Math.PI*2);ctx.fill();ctx.fillRect(-10,-R*.60,20,66);ctx.beginPath();ctx.moveTo(-16,-10);ctx.lineTo(-R*.52,46);ctx.lineTo(R*.52,46);ctx.lineTo(16,-10);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(-8,-R*.42);ctx.lineTo(-R*.78,-2);ctx.moveTo(8,-R*.40);ctx.lineTo(R*.70,-18);ctx.moveTo(-7,46);ctx.lineTo(-40,R*.86);ctx.moveTo(7,46);ctx.lineTo(42,R*.86);ctx.stroke();ctx.restore()}
 else if(id==='afterimage'){ctx.fillStyle=reveal?'#ebedf0':'#101b2f';ctx.fillRect(0,0,w,h);if(!reveal){ctx.fillStyle=['#f96a79','#6acfe9','#eac266'][Math.floor(frame/110)%3];ctx.beginPath();ctx.arc(cx,cy,R*.72,0,7);ctx.fill()}ctx.strokeStyle=reveal?'#444':'#fff';ctx.beginPath();ctx.moveTo(cx-10,cy);ctx.lineTo(cx+10,cy);ctx.moveTo(cx,cy-10);ctx.lineTo(cx,cy+10);ctx.stroke()}
 else if(id==='motion-induced-blindness'){for(let i=0;i<95;i++){let a=i*2.39996+t*.25,r=Math.sqrt((i+.5)/95)*R*1.45;ctx.fillStyle='#7ca4c0';ctx.beginPath();ctx.arc(cx+Math.cos(a)*r,cy+Math.sin(a)*r,2.5,0,7);ctx.fill()}ctx.fillStyle='#ffa362';ctx.beginPath();ctx.arc(cx+R*.65,cy-R*.4,9,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.fillText('+',cx-4,cy+5)}
 else if(id==='change-blindness'){ctx.fillStyle='#223c58';ctx.fillRect(cx-R,cy-R,R*2,R*2);ctx.fillStyle='#87d3e2';ctx.fillRect(cx-R*.6,cy-R*.7,R*.8,R*.7);ctx.fillStyle='#f8ba72';if(Math.floor(frame/85)%3!==1)ctx.beginPath(),ctx.arc(cx+R*.48,cy+R*.25,25,0,7),ctx.fill();ctx.fillStyle='#fff';ctx.font='14px system-ui';ctx.fillText('Find the changing shape',cx-R*.8,cy+R*.85)}
 }
 if(playing)frame++;
 }
 function loop(){if(!active)return;draw();raf=requestAnimationFrame(loop)}
 // Each instance owns its animation loop and cleans it up on navigation.
 loop();
 return {animated,play:()=>{playing=true},pause:()=>{playing=false},reset:()=>{frame=0;playing=motionAllowed;reveal=false;if(!animated)renderStatic(id,stage,false)},speed:v=>{speed=+v},reveal:()=>{reveal=!reveal;if(!animated)renderStatic(id,stage,reveal);return reveal},destroy:()=>{active=false;cancelAnimationFrame(raf)}};
}
