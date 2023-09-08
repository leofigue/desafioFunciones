//recuperar elementos del DOM
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("key");
const sectionLetras = document.getElementById("letras");

var colorFondo='';
var elementoDiv='';

//METODOS
const cambiaBackGround = function (elemento, color, tipo = 'click'){
                            if(tipo==='click'){
                                if(elemento.style.backgroundColor === color || elemento.style.backgroundColor==='')
                                    elemento.style.backgroundColor = 'black';
                                else
                                    elemento.style.backgroundColor = color;
                            }
                            else if(tipo === 'letra'){
                                elemento.style.backgroundColor = color;
                            }
                        }

//CAMBIA EL COLOR CUANDO HACEN CLICK EN LOS DIV
div1.addEventListener("click", function(){cambiaBackGround(div1,'blue');});                        
div2.addEventListener("click", function(){cambiaBackGround(div2,'red');});                        
div3.addEventListener("click", function(){cambiaBackGround(div3,'green');});
div4.addEventListener("click", function(){cambiaBackGround(div4,'yellow');});     

//CREA EL DIV DE LAS LETRAS Q W E
function creaDiv(letraPulsada){
    if(document.getElementById("key1")===null){
        const newDiv = document.createElement('div');
        newDiv.style.height='200px';
        newDiv.style.width='200px';
        newDiv.id = 'key1';
        newDiv.style.border ='1px solid black';
        newDiv.innerText='Presione las teclas "q", "w" o "e" para que este contenedor cambie de color';
        sectionLetras.appendChild(newDiv);
    }
    
    elementoDiv=document.getElementById("key1");
    (letraPulsada==='q' || letraPulsada==='e') ? elementoDiv.style.color = 'white' : elementoDiv.style.color = 'black';

}

//retorna el color asignado a la letra pulsada
const asignaColor = function (letra){
    switch (letra){
        case "a": return 'pink';
        case "s": return 'orange';
        case "d": return 'lightblue';
        case "q": return 'purple';
        case "w": return 'gray';
        case "e": return 'brown';
        default:
            elementoDiv.style.color = 'black';
            return 'white';
    }
}

//CAMBIA EL COLOR CUANDO PRESIONAN UNA TECLA
document.addEventListener('keydown', function (event) {
    let letraPulsada = event.key.toLocaleLowerCase();
    switch (letraPulsada){
        case "a":
        case "s":
        case "d":
            elementoDiv = div5;
            break;
        case "q":
        case "w":
        case "e":
            creaDiv(letraPulsada)
            break;
    }
    cambiaBackGround(elementoDiv, asignaColor(letraPulsada),'letra');
    //cambiaBackGround(elementoDiv, colorFondo,'letra');
})