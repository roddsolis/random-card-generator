
/* esta funcion clona el patron superior y lo refleja invertido */
function clonarPatron (){

    let cardPattern = document.querySelector('.table-up')
    let mainContainer = document.querySelector('.mainContainer')


    let tableMirror = document.createElement("table")

    tableMirror.className = "table-down"
    tableMirror.innerHTML = cardPattern.outerHTML
    mainContainer.append(tableMirror)
    
}

clonarPatron()

let mainContainer = document.querySelector('.mainContainer')
let tdItems = document.getElementsByTagName('td')

console.log(tdItems)
console.log(window.getComputedStyle(tdItems))
