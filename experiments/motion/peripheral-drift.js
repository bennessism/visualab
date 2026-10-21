// A stationary, high-contrast spiral pattern. Fit the entire disk within the SVG viewBox.
export function mount(stage){
  let dead=false;
  function draw(){
    if(dead)return;
    const cx=300,cy=180,radius=153,rings=26,paths=[];
    for(let ring=0;ring<rings;ring++){
      const inner=Math.max(.7,ring*radius/rings),outer=(ring+1)*radius/rings;
      const count=28+Math.floor(ring*1.4);
      for(let i=0;i<count;i++){
        const twist=ring*.32,a=2*Math.PI*i/count+twist,b=2*Math.PI*(i+1)/count+twist;
        const point=(r,angle)=>[(cx+r*Math.cos(angle)).toFixed(2),(cy+r*Math.sin(angle)).toFixed(2)];
        const p1=point(inner,a),p2=point(outer,a+.19),p3=point(outer,b+.19),p4=point(inner,b);
        const d='M'+p1.join(' ')+' L'+p2.join(' ')+' A'+outer+' '+outer+' 0 0 1 '+p3.join(' ')+' L'+p4.join(' ')+' A'+inner+' '+inner+' 0 0 0 '+p1.join(' ')+' Z';
        paths.push('<path d="'+d+'" fill="'+(i%2?'#090909':'#fff')+'"/>');
      }
    }
    stage.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" role="img" aria-label="Stationary black-and-white spiral" style="display:block;width:100%;height:100%"><rect width="600" height="360" fill="#101827"/><circle cx="300" cy="180" r="163" fill="#f3f3f3"/>'+paths.join('')+'</svg>';
  }
  draw();
  return {animated:false,play(){},pause(){},speed(){},reveal(){return false},reset(){draw()},destroy(){dead=true;stage.replaceChildren()}};
}