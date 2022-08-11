let menu_down = document.getElementById("menu_down");
let nav = document.getElementById("nav");
function show() {
    if (menu_down.src == "http://127.0.0.1:5500/menu_down.png")
    {
    nav.style.visibility="visible";
    menu_down.src ="up.png" ;
    }else{
        nav.style.visibility="hidden";
        menu_down.src ="menu_down.png" ;   
    }

}
