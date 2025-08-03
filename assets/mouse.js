const cursorRounded = document.querySelector('.follow');
const cursorPointed = document.querySelector('.pointer');

const moveCursor = (e)=> {
  const mouseY = e.pageY - 25;
  const mouseX = e.pageX - 25;

  // cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;


  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

}

window.addEventListener('mousemove', moveCursor)
