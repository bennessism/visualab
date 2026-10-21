export const NS='http://www.w3.org/2000/svg';
export const wrap=(body,view='0 0 600 360')=>'<svg viewBox="'+view+'" xmlns="'+NS+'" role="img" aria-label="Visual perception demonstration">'+body+'</svg>';
export const line=(x1,y1,x2,y2,color='#caeaff',width=4)=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+color+'" stroke-width="'+width+'" stroke-linecap="round"/>';
export const circ=(x,y,r,fill)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+fill+'"/>';
export const rect=(x,y,w,h,fill)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+fill+'"/>';
export const poly=(points,fill='none',stroke='#bde7ff',sw=3)=>'<polygon points="'+points+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+sw+'" stroke-linejoin="round"/>';
