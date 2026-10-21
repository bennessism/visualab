// Classic duck–rabbit ambiguous organization, with shared bill/ears at the left.
export function mount(stage){
  let reveal=false;
  function draw(){
    const outline='M134 170 C113 154 82 147 43 131 C71 127 108 131 144 137 C101 111 76 98 64 94 C110 100 154 115 198 135 C224 122 248 117 273 123 C305 103 347 110 380 133 C421 162 434 199 416 234 C400 267 363 282 330 274 C303 280 274 266 252 246 C230 253 211 241 199 221 C174 215 150 195 134 170 Z';
    stage.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" role="img" aria-label="Ambiguous duck head or rabbit head" style="display:block;width:100%;height:100%"><rect width="600" height="360" fill="#101827"/><g transform="translate(20 0)"><path d="'+outline+'" fill="#f0eee6" stroke="#b7c6d4" stroke-width="2.5" stroke-linejoin="round"/><circle cx="326" cy="159" r="7" fill="#121927"/><path d="M135 170 Q151 158 167 161" fill="none" stroke="#a5aeb7" stroke-width="2"/></g>'+(reveal?'<text x="300" y="328" font-size="15" fill="#90d9fa" font-family="sans-serif" text-anchor="middle">Left extensions: bill or ears</text>':'')+'</svg>';
  }
  draw();
  return {animated:false,play(){},pause(){},speed(){},reveal(){reveal=!reveal;draw();return reveal},reset(){reveal=false;draw()},destroy(){stage.replaceChildren()}};
}