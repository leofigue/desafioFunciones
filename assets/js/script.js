//recuperar elementos del DOM
const ele = document.getElementById("ele1");
const sinColor = document.getElementById("chkSinColor");

//METODOS
function pintar(elemento, color = 'green'){
    elemento.style.backgroundColor = color;
    
    (color === 'green') ? elemento.style.color = 'white' : elemento.style.color = 'black';
}
   
//ACCIONES
ele.addEventListener("click", function(){
                                    (sinColor.checked) ? pintar(ele) : pintar(ele, 'yellow');
                                }
                    );