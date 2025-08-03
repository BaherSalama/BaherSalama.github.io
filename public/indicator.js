function sad(e){
    let ratio = (document.scrollingElement.scrollTop) / (document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight)
    if (ratio >= 0.2){
        document.getElementById("go-up").style.scale = 1;
    }else{
        document.getElementById("go-up").style.scale = 0;
    }
    document.getElementById("indicator").style.width = ratio*100 +"%"
}
addEventListener('scroll',sad)
