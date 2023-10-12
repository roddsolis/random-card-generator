
/* esta funcion clona el patron superior, lo refleja y lo invierte */
function clonarPatron (){

    let cardPattern = document.querySelector('.table-up')
    let mainContainer = document.querySelector('.mainContainer')

    let tableMirror = document.createElement("table")

    tableMirror.className = "table-down"
    tableMirror.innerHTML = cardPattern.outerHTML
    mainContainer.append(tableMirror)
    
}

clonarPatron()

let mainContainer = document.getElementsByClassName('mainContainer')
let tdItems = document.getElementsByClassName('column')

for( i in tdItems){

    
    let tdStyles = window.getComputedStyle(tdItems[i])
    let tdProperty = tdStyles.visibility

    
    // console.log(tdProperty)

    if (tdProperty === "visible"){
        
       console.log(tdProperty)

        
    }

   /*  for( i in tdProperty){

        console.log(i)
        // console.log(tdProperty)

      /*   if (tdProperty === "visible"){
            console.log(tdProperty);
        } 
    } */


}








