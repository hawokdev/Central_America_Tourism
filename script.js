var botonOpenMenu = document.getElementById('despegable--button-open');
var botonCloseMenu = document.getElementById('despegable--button-close');
var menuDespegable = document.getElementById('menu-despegable');

botonOpenMenu.addEventListener("click", abrirMenuDespegable);
botonCloseMenu.addEventListener("click", abrirMenuDespegable);
contador = 0;
function abrirMenuDespegable()
{
    if(contador==0)
    {
        menuDespegable.style.right = "0";
        contador = 1;
    }
    else if(contador==1)
    {
        menuDespegable.style.right = "-100%";
        contador = 0;
    }
}