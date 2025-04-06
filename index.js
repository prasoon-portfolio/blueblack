const menu = document.getElementById("menu")
const menuIcon = document.getElementById("menu-icon")
const icon = document.getElementById("icon")

menuIcon.addEventListener("click", ()=>{
    menu.classList.toggle("active-menu")

    if(menu.className=="hidden md:flex gap-[30px] active-menu"){
        icon.className = "fa-solid fa-xmark"
    }else{
        icon.className = "fa-solid fa-bars"
    }
})