

let buttonNavbar =()=>{



    let enlace = document.getElementById("barra-nav-link")
    let buttonOpen = document.querySelector("size-button-navbar-open")
    let buttonClose = document.querySelector("size-button-navbar-close")


    document.addEventListener("click" , e=>{

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
