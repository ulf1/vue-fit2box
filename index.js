// New Vue3 syntax: https://v3.vuejs.org/guide/migration/custom-directives.html#_3-x-syntax
export default {
  /** for the initial call/rendering */
  mounted: function(el) {
    el.style.fontSize = fitTextToBox(el);
  },
  /** when a new text string is injected */
  removed: function(el) {
    el.style.fontSize = fitTextToBox(el);
  },
  /** if the HTML element's dimension changes, see https://web.dev/resize-observer/ */
  beforeMount: function(el) {
    el.resize_ob = new ResizeObserver(() => {
      el.style.fontSize = fitTextToBox(el);
    });
    el.resize_ob.observe(el);
  },
  unmounted: function(el) {
    el.resize_ob.unobserve(el);
  }
}

function fitTextToBox(el) {
  const bh = el.clientHeight / 17.0; // approx to rem units
  const bw = el.clientWidth / 17.0;
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