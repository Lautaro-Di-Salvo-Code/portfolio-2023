

let buttonNavbar =()=>{



    let enlace = document.getElementById("barra-nav-link")
    let buttonOpen = document.querySelector("size-button-navbar-open")
    let buttonClose = document.querySelector("size-button-navbar-close")
    let botonesEspañol = document.querySelector(".es")
    let botonesIngles = document.querySelector(".eng")
    let botonIdioma = document.getElementById("botonidioma")
    let barranav = document.querySelector(".nav-options"),
    arrowbtn = document.querySelector(".img-arrow")
    
   
    console.log(botonesIngles)
    console.log(botonesEspañol)
    console.log(barranav)
   

    document.addEventListener("scroll" , e=>{
        console.log(window.scrollY)


        if(window.scrollY > 400){
            arrowbtn.classList.remove("img-arrow")
            arrowbtn.classList.add("img-arrow-scroll")
            
        }else {
            arrowbtn.classList.remove("img-arrow-scroll")
            arrowbtn.classList.add("img-arrow")

        }
        
        if(window.scrollY > 200){
            barranav.classList.add("nav-options-fixed")
        }else{
            
            barranav.classList.remove("nav-options-fixed")
        }

    })



    document.addEventListener("click" , e=>{
        
        
        if(e.target.matches("#botonidioma")){
            e.preventDefault()
            botonIdioma.textContent = "Español"
            botonesEspañol.classList.add("hidden")
            
            botonesIngles.classList.remove(".eng")
            
        }else{

            botonIdioma.textContent = "English"
        }
        
        // if(e.target.matches("#botonidioma")){
            

        // }
        // if(e.target.matches("#botonIdioma")){
        //     e.preventDefault()
            
        // }

        if(e.target.matches(".size-button-navbar-open ")){
            e.target.style.display = "none"
            document.querySelector(".size-button-navbar-close").style.display = "block"
            
        }else if(".size-button-navbar-close"){
            document.querySelector(".size-button-navbar-close").style.display = "none"
            document.querySelector(".size-button-navbar-open").style.display = "block"
        }
        
        if(e.target.matches(".size-button-navbar-open ")){
            document.querySelector(".nav-positioning-mob").classList.add("active")
        }else if(".size-button-navbar-close"){
            document.querySelector(".nav-positioning-mob").classList.remove("active")
            
        }   
        
        if(e.target.matches(".nav-positioning-mob")){
            return null
            
        }
        
        if(e.target.matches(enlace)){
            document.querySelector(".nav-positioning-mob").classList.remove("active")
            buttonClose.style.display = "none"
            // buttonOpen.style.display = "block"
            
        }
    })



}


document.addEventListener("DOMContentLoaded" , e=>{

    buttonNavbar(".size-button-navbar-open")
})
