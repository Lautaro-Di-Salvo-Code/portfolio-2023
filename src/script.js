let slider = ( ) => {
    let sig = document.querySelector(".next")
    let atras = document.querySelector(".back")
    let nietos = document.querySelectorAll(".nieto-slider")
    // padre = document.querySelectorAll(".hijo-slider")
    
let i = 0

document.addEventListener("click", e=>{
    // si se hace click en atras
    if(e.target === atras){
        // remueve del indice 0, ya que es lo primero que está asignado como valor en 
        // la variable i
        nietos[i].classList.remove("active")
        // se resta uno a la i y queda en numero negativo
        i--;
        
        console.log(i)
        // como en un array es posible que en un array antes del 0, haya un -1
        //  se valida
        if(i < 0){
            // se le asigna a i el numero de la longitud del array entera restada en menos 1
            i = nietos.length - 1
        }
        // y a la posicion nueva, en su indice que seria dentro del array, un elemento html
        // se le agrega en la clase, active
        nietos[i].classList.add("active")
    }
    // si se hace click en boton siguiente
    if(e.target === sig ){
        // remueve active al elemento en  el primer indice, con i valiendo 0
        nietos[i].classList.remove("active")
        // se le suma 1, y avanza de posicion por el array que es el conjunto de hijos
        i++;
        
        // si i es mayor o igual a la longitud del array, suponiendo que
        // hay indice de más, mas allá del limite del array
        if(i >= nietos.length){
            // devolvemos a la posicion cero del array, osea el primer hijo
            i = 0
            console.log(nietos)
            console.log(i)
        }
        // y le agregamos active a ese ultimo indice
            nietos[i].classList.add("active")


    }
    
})


   
} 
// slider()
document.addEventListener("DOMContentLoaded" , e=>{
    slider(".nieto-slider")



})

