export default {
  inserted: function (el) {
    el.style.fontSize = fitTextToBox(el);
  }
}

function fitTextToBox(el){
  const bh = el.closest('.card').clientHeight / 16.0;  // approx to rem units
  const bw = el.closest('.card').clientWidth / 16.0;
  const fh = 1;
  const fw = getTextWidth(el.textContent, `${fh}rem`);
  const scaleFont = 2.0 * Math.sqrt(bh * bw) / Math.sqrt(fw);
  const fontSize = fh * scaleFont;
  return `${fontSize}rem`;
}

function getTextWidth(text, font){
  const c = document.createElement("canvas");
  let ctx = c.getContext("2d");
  ctx.font = font;
  return ctx.measureText(text).width;
}
