let a = document.getElementById("scroller")
if (a){
  let count = a.children.length
  for (let i=0;i<count;i++){
    let b = a.children[i].cloneNode(true);
    a.appendChild(b);
  }
}
