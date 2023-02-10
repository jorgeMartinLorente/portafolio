

//slider
const slider = document.getElementById("slider")
let sliderProyectos = document.querySelectorAll(".proyecto");
let ultimoProyecto = sliderProyectos[sliderProyectos.length -1];


slider.insertAdjacentElement("afterbegin",ultimoProyecto);
//boton derecho
const btnDerecho = document.querySelector(".boton-slider--derecho");
    function derecha(){
let primerProyecto = document.querySelectorAll(".proyecto")[0];
slider.style.marginLeft ="-200%";
slider.style.transition ="all 0.5";
setTimeout(function(){
    slider.style.transition="none";
    slider.insertAdjacentElement("beforeend",primerProyecto);
    slider.style.marginLeft="-100%";

},500);
}
btnDerecho.addEventListener("click",function(){derecha();});
//boton izquierdo
const btnizquierdo = document.querySelector(".boton-slider--izquierda");
function izquierda(){
    let sliderProyectos = document.querySelectorAll(".proyecto");
    let ultimoProyecto = sliderProyectos[sliderProyectos.length -1];
    slider.style.marginLeft ="0%";
    slider.style.transition ="all 0.2";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement("afterbegin",ultimoProyecto);
        slider.style.marginLeft="-100%";
    
    },500);}
    btnizquierdo.addEventListener("click",function(){izquierda();});
