const elements = document.querySelectorAll(`.onscroll`);
elements.forEach(element => {
  window.addEventListener("load", () => {
    var domRect = element.parentElement.getBoundingClientRect();
    var spaceratio = (window.scrollY + window.innerHeight) / (window.scrollY + domRect.bottom - domRect.height / 2)
    var cond = spaceratio >= 1
    if (cond){
      element.classList.add('reverse');
    }else{
      element.classList.remove('reverse')
    }
  },
  { passive: true });
});

elements.forEach(element => {
  window.addEventListener("scroll", () => {
    var domRect = element.parentElement.getBoundingClientRect();
    var spaceratio = (window.scrollY + window.innerHeight) / (window.scrollY + domRect.bottom - domRect.height / 2)
    var cond = spaceratio >= 1
    if (cond){
      element.classList.add('reverse');
    }else{
      element.classList.remove('reverse')
    }
  },
  { passive: true });
});



// Create the observer like the examples above
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting){
//       if (entry.intersectionRatio <= 0.5) {
//         entry.target.classList.add('scroll-animation');
//         entry.target.style.opacity= 1; 
//         return;
//       }
//     }
//     else{
//       entry.target.style.opacity= 0; 
//       entry.target.classList.remove('scroll-animation');
//     }
//   });
// });

// // Get multiple elements instead of a single one using "querySelectorAll"
// const squares = document.querySelectorAll('.onscroll');

// // Loop over the elements and add each one to the observer
// squares.forEach((element) => observer.observe(element));
