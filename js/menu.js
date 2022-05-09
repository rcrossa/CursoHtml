const elementos = document.getElementsByClassName("selected");
    for (let i = 0; elementos.length; i++) {
    elementos[i].addEventListener("mouseover", selected);
    
    }
function selected() {
  this.style.color = "white";

}