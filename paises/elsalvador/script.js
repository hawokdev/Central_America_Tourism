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
ruta1Botton1.addEventListener("click", slide1)
ruta1Botton2.addEventListener("click", slide2)
ruta1Botton3.addEventListener("click", slide3)
ruta1Botton4.addEventListener("click", slide4)

//botonesRutasTitle
var ruta1BottonTitle = document.getElementById('mainRuta1');
var ruta1Content = document.getElementById('contentRuta1');
var contador =  0;

ruta1BottonTitle.addEventListener("click", desplegarRuta1)

function desplegarRuta1()
{  
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

function slide1()
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
function slide2()
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
function slide3()
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
function slide4()
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