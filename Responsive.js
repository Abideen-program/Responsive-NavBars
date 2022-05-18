// To toggle the hambugger
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const hambugger = document.querySelector(".ham");

toggleHambugger = () =>{
    if(menu.classList.contains("activateToggler")){
        menu.classList.remove("activateToggler");
        hambugger.innerHTML = `<i class="fas fa-bars"></i>`
    } else{
        menu.classList.add("activateToggler");
        hambugger.innerHTML = `<i class="fas fa-times"></i>`
    };
};

toggle.onclick = () =>{
    toggleHambugger();
}

// To toggle the submenus
const items = document.querySelectorAll(".item");

function toggleSubmenu() {
    if(this.classList.contains("submenu-active")){
        this.classList.remove("submenu-active");
        // To remove the submenu list from already opened submenu when new one is opened
    } else if(menu.querySelector(".submenu-active")){
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active")
    }
    else{
        this.classList.add("submenu-active")
    }
}

for(item of items){
    if(item.classList.contains("has-submenu")){
        item.addEventListener("click", toggleSubmenu, false)
        item.addEventListener("keypress", toggleSubmenu, false)
    }
}

// To clear the submenu qhen you click anywhere aside the navbar

function closeSubmenu(event){
    let isClickedInside = menu.contains(event.target)
    if(!isClickedInside && menu.querySelector(".submenu-active")){
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

document.addEventListener("click", closeSubmenu, false)