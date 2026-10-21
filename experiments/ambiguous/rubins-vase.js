// Rubin's vase: the same continuous boundary defines both profiles and vase.
export function mount(stage){
  let reveal=false;
  function draw(){
    const rightProfile=[[0,93],[22,95],[45,92],[63,86],[78,82],[94,83],[108,79],[119,70],[129,72],[139,87],[146,77],[151,66],[156,64],[163,70],[170,80],[176,71],[184,76],[192,88],[201,94],[214,97],[230,91],[246,81],[270,82],[299,94],[332,104],[360,107]];
    const left=rightProfile.map(([y,w])=>(300-w)+','+y);
    const right=[...rightProfile].reverse().map(([y,w])=>(300+w)+','+y);
    const shape='M'+left.join(' L')+' L'+right.join(' L')+' Z';
    stage.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" role="img" aria-label="Pale central vase between two dark human profiles" style="display:block;width:100%;height:100%"><rect width="600" height="360" fill="#101827"/><path d="'+shape+'" fill="#f4efe2"/>'+(reveal?'<text x="300" y="340" font-size="15" fill="#8bdcf4" text-anchor="middle" font-family="sans-serif">Vase in light · faces in dark</text>':'')+'</svg>';
  }
  draw();
  return {animated:false,play(){},pause(){},speed(){},reveal(){reveal=!reveal;draw();return reveal},reset(){reveal=false;draw()},destroy(){stage.replaceChildren()}};
}