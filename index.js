export default {
  /** for the initial call/rendering */
  inserted: function(el, binding) {
    el.textContent = binding.value;
    el.style.fontSize = fitTextToBox(el);
  },
  /** when a new text string is injected */
  update: function(el, binding) {
    el.textContent = binding.value;
    el.style.fontSize = fitTextToBox(el);
  },
  /** if the HTML element's dimension changes, see https://web.dev/resize-observer/ */
  bind: function(el, binding) {
    el.resize_ob = new ResizeObserver(() => {
      el.textContent = binding.value;
      el.style.fontSize = fitTextToBox(el);
    });
    el.resize_ob.observe(el);
  },
  unbind: function(el) {
    el.resize_ob.unobserve(el);
    el.resize_ob = undefined;
  }
}

function fitTextToBox(el) {
  const bh = el.clientHeight / 16.0; // approx to rem units
  const bw = el.clientWidth / 16.0;
  const fh = 1;
  const fw = getTextWidth(el.textContent, `${fh}rem`);
  const scaleFont = 2.0 * Math.sqrt(bh * bw) / Math.sqrt(fw);
  const fontSize = fh * scaleFont;
  return `${fontSize}rem`;
}

function getTextWidth(text, font) {
  const c = document.createElement("canvas");
  let ctx = c.getContext("2d");
  ctx.font = font;
  return ctx.measureText(text).width;
}