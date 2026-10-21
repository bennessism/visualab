import {animate} from '../../js/animation-core.js';

// The library card and detail page render exactly the same scene.
// All dimensions are relative to the stage, with no text covering the effect.
export function mount(stage, options) {
  return animate(stage, ({ctx, cx, cy, R, frame, reveal}) => {
    ctx.save();
    const size = R * 1.95;
    const left = cx - size / 2;
    const top = cy - size / 2;

    ctx.fillStyle = '#223c58';
    ctx.fillRect(left, top, size, size);

    ctx.fillStyle = '#87d3e2';
    ctx.fillRect(left + size * .20, top + size * .18, size * .36, size * .36);

    // A brief blank interval makes the change harder to notice.
    const phase = frame % 190;
    const visible = phase < 88 || (phase >= 100 && phase < 183);
    if (visible) {
      // Keep the same large circle in both previews and detail.
      // Keep its position and dimensions locked across both clips.
      // Only the fill color changes, eliminating perceived vertical jitter.
      const changed = phase >= 100;
      const radius = size * .22;
      const x = left + size * .71;
      const y = top + size * .67;
      ctx.fillStyle = changed ? '#f5a95f' : '#f8ba72';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      if (reveal) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = Math.max(1, R * .012);
        ctx.beginPath();
        ctx.arc(left + size * .71, y, radius * 1.18, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    ctx.restore();
  }, options);
}
