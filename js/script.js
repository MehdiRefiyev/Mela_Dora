$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
});
let frid = document.getElementById('fruts').addEventListener('click' , frutfilter , true);
let fruts = document.getElementsByClassName('cardf');
let vega = document.getElementById('vega').addEventListener('click' , vegafilter , true);
let vegas = document.getElementsByClassName('cardveg');
let tax = document.getElementById('tax').addEventListener('click' , taxilfilter , true);
let tasxil = document.getElementsByClassName('cardt');
let another = document.getElementById('another').addEventListener('click' , aotherfilter , true);
let anothers = document.getElementsByClassName('cardonother');
let all = document.getElementById('all').addEventListener('click' , allfilter , true);
let showup4 = document.getElementById('showup4');
showup4.addEventListener('click', funcexit , true);
let apple = document.getElementById('apple').addEventListener('click' , functionapple , true);
let shopplace = document.getElementById("shopplace");
let mainpic =document.getElementById("mainpic");
let pumkin = document.getElementById("pumkin").addEventListener('click' , functionpumkin , true);
let ayapple = document.getElementById("ayapple").addEventListener('click' , functioarmurd , true);
let cheery = document.getElementById("cheery").addEventListener('click' , functionvherry , true);
let greekq = document.getElementById('greekq').addEventListener('click' , functiongreek , true);
let visniya = document.getElementById('visniya').addEventListener('click' , functiovis , true);
let taxill = document.getElementById('taxill').addEventListener('click' , functiotaxil , true);
let orange = document.getElementById('orange').addEventListener('click' , functiorangee , true);
let ting = document.getElementById('ting').addEventListener('click' , functioting , true);
let tomate = document.getElementById('tomate').addEventListener('click' , functiotomate , true);
let textchange = document.getElementById("textchange");
function funcexit(){
  showup4.style.display="none";
  shopplace.style.display="flex";
}
function functionapple(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/932-9328480_apples-png-image-red-apple-fruit.svg";
  textchange.innerHTML="Alma";
}
function functionpumkin(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/1028.svg";
  textchange.innerHTML="Gavali";
}
function functioarmurd(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/183666_1-20201031-211428.svg";
  textchange.innerHTML="Armud";
}
function functionvherry(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/6807573_preview.svg";
  textchange.innerHTML="Gilas";
}
function functiongreek(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/NicePng_walnut-png_994140.svg";
  textchange.innerHTML="Qoz";
}
function functiovis(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/purepng.com-peachpeachjuicy-fruitnectarinefoodfruitpeachescutted-peaches-17015273518552udi7.svg";
  textchange.innerHTML="Şaftali";
}
function functiotaxil(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/NicePng_wheat-png_92445.svg";
  textchange.innerHTML="Taxil";
}
function functiorangee(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/Orange-PNG-Image.svg";
  textchange.innerHTML="Portagal";
}
function functioting(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/9-99445_growing-plant-png-mart-plant-growing-transparent.svg";
  textchange.innerHTML="Müxtəlif tinglər";
}
function functiotomate(){
  showup4.style.display="flex";
  shopplace.style.display="none";
  mainpic.src="./image/Tomato-PNG-Free-File.svg";
  textchange.innerHTML="Pomidor";
}
function frutfilter(){
  for (let i = 0; i < anothers.length; i++) {
    anothers[i].style.display = "none";
  }
  for (let i = 0; i < vegas.length; i++) {
    vegas[i].style.display = "none";
  }
  for (let i = 0; i < tasxil.length; i++) {
    tasxil[i].style.display = "none";
  }
  for (let i = 0; i < fruts.length; i++) {
    fruts[i].style.display = "flex";
  }
}
function vegafilter(){
  for (let i = 0; i < fruts.length; i++) {
    fruts[i].style.display = "none";
  }
  for (let i = 0; i < anothers.length; i++) {
    anothers[i].style.display = "none";
  }
  for (let i = 0; i < tasxil.length; i++) {
    tasxil[i].style.display = "none";
  }
  for (let i = 0; i < vegas.length; i++) {
    vegas[i].style.display = "flex";
  }
}
function taxilfilter(){
  for (let i = 0; i < fruts.length; i++) {
    fruts[i].style.display = "none";
  }
  for (let i = 0; i < anothers.length; i++) {
    anothers[i].style.display = "none";
  }
  for (let i = 0; i < vegas.length; i++) {
    vegas[i].style.display = "none";
  }
  for (let i = 0; i < tasxil.length; i++) {
    tasxil[i].style.display = "flex";
  }
}
function aotherfilter(){
  for (let i = 0; i < fruts.length; i++) {
    fruts[i].style.display = "none";
  }
  for (let i = 0; i < vegas.length; i++) {
    vegas[i].style.display = "none";
  }
  for (let i = 0; i < tasxil.length; i++) {
    tasxil[i].style.display = "none";
  }
  for (let i = 0; i < anothers.length; i++) {
    anothers[i].style.display = "flex";
  }
}
function allfilter(){
  for (let i = 0; i < fruts.length; i++) {
    fruts[i].style.display = "flex";
  }
  for (let i = 0; i < anothers.length; i++) {
    anothers[i].style.display = "flex";
  }
  for (let i = 0; i < vegas.length; i++) {
    vegas[i].style.display = "flex";
  }
  for (let i = 0; i < tasxil.length; i++) {
    tasxil[i].style.display = "flex";
  }
}