//SlidersRuta1
var ruta1Slider1 = document.getElementById('ruta1-slider-1');
var ruta1Slider2 = document.getElementById('ruta1-slider-2');
var ruta1Slider3 = document.getElementById('ruta1-slider-3');
var ruta1Slider4 = document.getElementById('ruta1-slider-4');

var ruta1Botton1 = document.getElementById('ruta1-botton-1');
var ruta1Botton2 = document.getElementById('ruta1-botton-2');
var ruta1Botton3 = document.getElementById('ruta1-botton-3');
var ruta1Botton4 = document.getElementById('ruta1-botton-4')
//botonesSliderRuta1
ruta1Botton1.addEventListener("click", ruta1slide1)
ruta1Botton2.addEventListener("click", ruta1slide2)
ruta1Botton3.addEventListener("click", ruta1slide3)
ruta1Botton4.addEventListener("click", ruta1slide4)

//botonesRutasTitle
var ruta1BottonTitle = document.getElementById('mainRuta1');
var ruta1Content = document.getElementById('contentRuta1');
var contador =  0;

ruta1BottonTitle.addEventListener("click", desplegarRuta1)

function desplegarRuta1(evento)
{  
    console.log(evento);
    if(contador==0)
    {
        ruta1Content.style.animationPlayState = "running";
        ruta1Content.style.display = "grid";
        contador = 1;
    }
    else if (contador==1)
    {
        ruta1Content.style.display = "none";
        contador = 0;
    }
}

function ruta1slide1()
{
    ruta1Botton1.style.backgroundColor = "black";
    ruta1Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Slider1.style.opacity = "1";
    ruta1Slider2.style.opacity = "0";
    ruta1Slider3.style.opacity = "0";
    ruta1Slider4.style.opacity = "0";
}
function ruta1slide2()
{
    ruta1Botton2.style.backgroundColor = "black";
    ruta1Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Slider2.style.opacity = "1";
    ruta1Slider1.style.opacity = "0";
    ruta1Slider3.style.opacity = "0";
    ruta1Slider4.style.opacity = "0";
}
function ruta1slide3()
{
    ruta1Botton3.style.backgroundColor = "black";
    ruta1Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Slider3.style.opacity = "1";
    ruta1Slider1.style.opacity = "0";
    ruta1Slider2.style.opacity = "0";
    ruta1Slider4.style.opacity = "0";
}
function ruta1slide4()
{
    ruta1Botton4.style.backgroundColor = "black";
    ruta1Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta1Slider4.style.opacity = "1";
    ruta1Slider1.style.opacity = "0";
    ruta1Slider2.style.opacity = "0";
    ruta1Slider3.style.opacity = "0";
}


//SlidersRuta2
var ruta2Slider1 = document.getElementById('ruta2-slider-1');
var ruta2Slider2 = document.getElementById('ruta2-slider-2');
var ruta2Slider3 = document.getElementById('ruta2-slider-3');
var ruta2Slider4 = document.getElementById('ruta2-slider-4');

var ruta2Botton1 = document.getElementById('ruta2-botton-1');
var ruta2Botton2 = document.getElementById('ruta2-botton-2');
var ruta2Botton3 = document.getElementById('ruta2-botton-3');
var ruta2Botton4 = document.getElementById('ruta2-botton-4')
//botonesSliderRuta2
ruta2Botton1.addEventListener("click", ruta2slide1)
ruta2Botton2.addEventListener("click", ruta2slide2)
ruta2Botton3.addEventListener("click", ruta2slide3)
ruta2Botton4.addEventListener("click", ruta2slide4)

//botonesRutasTitle2
var ruta2BottonTitle = document.getElementById('mainRuta2');
var ruta2Content = document.getElementById('contentRuta2');
var contador2 =  0;

ruta2BottonTitle.addEventListener("click", desplegarRuta2)

function desplegarRuta2(evento)
{  
    console.log(evento);
    if(contador2==0)
    {
        ruta2Content.style.animationPlayState = "running";
        ruta2Content.style.display = "grid";
        contador2 = 1;
    }
    else if (contador2==1)
    {
        ruta2Content.style.display = "none";
        contador2 = 0;
    }
}

function ruta2slide1()
{
    ruta2Botton1.style.backgroundColor = "black";
    ruta2Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Slider1.style.opacity = "1";
    ruta2Slider2.style.opacity = "0";
    ruta2Slider3.style.opacity = "0";
    ruta2Slider4.style.opacity = "0";
}
function ruta2slide2()
{
    ruta2Botton2.style.backgroundColor = "black";
    ruta2Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Slider2.style.opacity = "1";
    ruta2Slider1.style.opacity = "0";
    ruta2Slider3.style.opacity = "0";
    ruta2Slider4.style.opacity = "0";
}
function ruta2slide3()
{
    ruta2Botton3.style.backgroundColor = "black";
    ruta2Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Slider3.style.opacity = "1";
    ruta2Slider1.style.opacity = "0";
    ruta2Slider2.style.opacity = "0";
    ruta2Slider4.style.opacity = "0";
}
function ruta2slide4()
{
    ruta2Botton4.style.backgroundColor = "black";
    ruta2Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta2Slider4.style.opacity = "1";
    ruta2Slider1.style.opacity = "0";
    ruta2Slider2.style.opacity = "0";
    ruta2Slider3.style.opacity = "0";
}

//SlidersRuta3
var ruta3Slider1 = document.getElementById('ruta3-slider-1');
var ruta3Slider2 = document.getElementById('ruta3-slider-2');
var ruta3Slider3 = document.getElementById('ruta3-slider-3');
var ruta3Slider4 = document.getElementById('ruta3-slider-4');

var ruta3Botton1 = document.getElementById('ruta3-botton-1');
var ruta3Botton2 = document.getElementById('ruta3-botton-2');
var ruta3Botton3 = document.getElementById('ruta3-botton-3');
var ruta3Botton4 = document.getElementById('ruta3-botton-4')

//botonesSliderRuta3
ruta3Botton1.addEventListener("click", ruta3slide1)
ruta3Botton2.addEventListener("click", ruta3slide2)
ruta3Botton3.addEventListener("click", ruta3slide3)
ruta3Botton4.addEventListener("click", ruta3slide4)

//botonesRutasTitle3
var ruta3BottonTitle = document.getElementById('mainRuta3');
var ruta3Content = document.getElementById('contentRuta3');
var contador3 =  0;

ruta3BottonTitle.addEventListener("click", desplegarRuta3)

function desplegarRuta3(evento)
{  
    console.log(evento);
    if(contador3==0)
    {
        ruta3Content.style.animationPlayState = "running";
        ruta3Content.style.display = "grid";
        contador3 = 1;
    }
    else if (contador3==1)
    {
        ruta3Content.style.display = "none";
        contador3 = 0;
    }
}

function ruta3slide1()
{
    ruta3Botton1.style.backgroundColor = "black";
    ruta3Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Slider1.style.opacity = "1";
    ruta3Slider2.style.opacity = "0";
    ruta3Slider3.style.opacity = "0";
    ruta3Slider4.style.opacity = "0";
}
function ruta3slide2()
{
    ruta3Botton2.style.backgroundColor = "black";
    ruta3Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Slider2.style.opacity = "1";
    ruta3Slider1.style.opacity = "0";
    ruta3Slider3.style.opacity = "0";
    ruta3Slider4.style.opacity = "0";
}
function ruta3slide3()
{
    ruta3Botton3.style.backgroundColor = "black";
    ruta3Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Botton4.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Slider3.style.opacity = "1";
    ruta3Slider1.style.opacity = "0";
    ruta3Slider2.style.opacity = "0";
    ruta3Slider4.style.opacity = "0";
}
function ruta3slide4()
{
    ruta3Botton4.style.backgroundColor = "black";
    ruta3Botton1.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Botton2.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Botton3.style.backgroundColor = "rgb(119, 119, 119)";
    ruta3Slider4.style.opacity = "1";
    ruta3Slider1.style.opacity = "0";
    ruta3Slider2.style.opacity = "0";
    ruta3Slider3.style.opacity = "0";
}

var botonOpenMenu = document.getElementById('despegable--button-open');
var botonOpenMenu2 = document.getElementById('despegable--button-open2');
var botonCloseMenu = document.getElementById('despegable--button-close');
var menuDespegable = document.getElementById('menu-despegable');

botonOpenMenu.addEventListener("click", abrirMenuDespegable);
botonCloseMenu.addEventListener("click", abrirMenuDespegable);
botonOpenMenu2.addEventListener("click", abrirMenuDespegable)
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
