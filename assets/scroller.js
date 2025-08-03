window.addEventListener("load", () => {
  let w = document.getElementsByClassName("scroller")
  if (w){
    let count = w.length
    console.log(count)
    for (let i=0;i<count;i++){
      let c = w[i].children.length
      for (let j=0;j<c;j++){
        let b = w[i].children[j].cloneNode(true);
        w[i].appendChild(b);
      }
    }
  }
});
