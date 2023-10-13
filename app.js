
let mainContainer = document.getElementsByClassName('mainContainer')
let elIconosDeCarta = ["fa-solid fa-club", "fa-solid fa-diamond", "fa-solid fa-spade", "fa-solid fa-heart"]

/* estos array definen el patron de la carta segun su numero */

function numeroAleatorio1() {
  var numeroAleatorio = Math.random();
  var numeroEntero = Math.floor(numeroAleatorio * 8);
  numeroEntero += 1;
  return numeroEntero;
}

function numeroAleatorio2() {
    var numeroAleatorio = Math.random();
    var numeroEntero = Math.floor(numeroAleatorio * 3);
    numeroEntero += 1;
    return numeroEntero;
}

var num1 = numeroAleatorio1();
var num2 = numeroAleatorio2();


let carta = [
    {
        cardNumber: 2,
        viewIcon: ["visible", "hidden"],
        CardPattern: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
        cardNumber: 3,
        viewIcon: ["visible", "hidden"],
        CardPattern: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    },
    {
        cardNumber: 4,
        viewIcon: ["visible", "hidden"],
        CardPattern: [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
        cardNumber: 5,
        viewIcon: ["visible", "hidden"],
        CardPattern: [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    },
    {
        cardNumber: 6,
        viewIcon: ["visible", "hidden"],
        CardPattern: [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    },
    {
        cardNumber: 7,
        viewIcon: ["visible", "hidden"],
        CardPattern: [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    },
    {
        cardNumber: 8,
        viewIcon: ["visible", "hidden"],
        CardPattern: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    },
    {
        cardNumber: 9,
        viewIcon: ["visible", "hidden"],
        CardPattern: [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    },
    {
        viewIcon: ["visible", "hidden"],
        cardNumber: 10,
        CardPattern: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    }
]


/* esta funcion clona el patron superior, lo refleja y lo invierte */

function cambiarCarta() {

    let iconoDeCarta = document.querySelectorAll('i')
    let numeroDeCarta = document.getElementsByClassName('numeroDeCarta')
    let tdItems = document.getElementsByClassName('column')

    numeroDeCarta[0].innerHTML = carta[num1].cardNumber
    for (x in carta[num1].CardPattern) { tdItems[x].style.visibility = carta[num1].viewIcon[carta[num1].CardPattern[x]] /* este bucle recorre los iconos y cambia su valor */ }
    
    /* este valor cambia el icono cambiando los numeros del 0 al 1*/
    for (i in iconoDeCarta) { iconoDeCarta[i].className = elIconosDeCarta[num2] }
}


function clonarPatron() {

    let cardPattern = document.querySelector('.table-up')
    let mainContainer = document.querySelector('.mainContainer')

    /* este es el contenedor que tiene que recibir el elemento del otro lado */
    let numberRight = document.querySelector('.numberRight')
    /* aca rescato el contenido que hay que reflejar */
    let numberLeft = document.querySelector('.numberLeft')

    // console.log(numberRight)
    // console.log(numberLeft.children[0].outerHTML)

    let tableMirror = document.createElement("table")

    tableMirror.className = "table-down"
    tableMirror.innerHTML = cardPattern.outerHTML
    mainContainer.append(tableMirror)
    numberRight.innerHTML = numberLeft.children[0].outerHTML

}

cambiarCarta() 
clonarPatron()








/* let mainContainer = document.getElementsByClassName('mainContainer')

function contarPropiedadVisble (){

    let tdItems = document.getElementsByClassName('column')
    
    for( i in tdItems){
        
        let tdStyles = window.getComputedStyle(tdItems[i])
        let tdProperty = tdStyles.visibility
        
        // console.log(document.styleSheets[1].cssRules[i].style.visibility)

        // console.log(tdProperty)

    
        if (tdProperty === "visible"){     
                
            //    console.log(tdProperty)

        }

    }

    return tdProperty
}

contarPropiedadVisble() */
