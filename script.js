const blackBG = document.getElementById('bg-black');

const moveCursorHighlight = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  const y = `${mouseY}px`;
  const x = `${mouseX}px`;
  blackBG.style.setProperty('--mouseY', y);
  blackBG.style.setProperty('--mouseX', x);
}

onmousemove = (e) => {moveCursorHighlight(e)};