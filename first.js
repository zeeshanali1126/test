var menu = document.getElementById("menu");

function openmenu(){
    menu.style.right="0px";
}

function closemenu(){
    menu.style.right="-290px";
}




var typing=new Typed(".text", {
    strings: ["Graphic Designer", "Web Designer","Frontend Developer"],
    typeSpeed: 120,
    backSpeed: 20,
    loop: true,
});