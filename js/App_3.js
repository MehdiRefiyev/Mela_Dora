let nextslide = document.getElementById("nextslide");
nextslide.addEventListener("click", functionprev , true);
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let prevslide = document.getElementById("prevslide");
let dot1= document.getElementById("dot1");
let dot2 =document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
prevslide.addEventListener("click" , functionnext , true);
let numcount = 0;
let taxilphoto = document.getElementsByClassName("taxilphoto");
let gardenphoto = document.getElementsByClassName("gardenphoto");
let womenphoto=document.getElementsByClassName("womenphoto");
let whatherphoto = document.getElementsByClassName("whatherphoto");
let kolphoto = document.getElementsByClassName("kolphoto");
let bagphoto=document.getElementsByClassName("bagphoto");
let showupdiv1 = document.getElementById("showupdiv1");
showupdiv1.addEventListener("click", functshowup , true);
let showphoto = document.getElementById("showphoto");
  function functionprev(){
    numcount++;
      if(numcount==1 || numcount == -1){
        slide1.style.display="none";
        slide2.style.display ="inline-flex";
        slide3.style.display = "none";
        dot2.style.backgroundColor = "green";
        dot1.style.backgroundColor = "lightgreen";
        dot3.style.backgroundColor = "lightgreen";
        console.log(numcount);
        return numcount;
      }
      else if (numcount==2 || numcount == -2){
        slide1.style.display="none";
        slide2.style.display ="none";
        slide3.style.display = "inline-flex";
        dot2.style.backgroundColor = "lightgreen";
        dot1.style.backgroundColor = "lightgreen";
        dot3.style.backgroundColor = "green";
        console.log(numcount);
        return numcount;
      }
      else {
        slide1.style.display="inline-flex";
        slide2.style.display ="none";
        slide3.style.display = "none";
        console.log(numcount);
        dot2.style.backgroundColor = "lightgreen";
        dot1.style.backgroundColor = "green";
        dot3.style.backgroundColor = "lightgreen";
        numcount=0;
        return numcount;
      }
  }
  function functionnext(){
    numcount--;
      if(numcount == -1 || numcount == 1){
        slide1.style.display="none";
        slide2.style.display ="inline-flex";
        slide3.style.display = "none";
        dot2.style.backgroundColor = "green";
        dot1.style.backgroundColor = "lightgreen";
        dot3.style.backgroundColor = "lightgreen";
        console.log(numcount);
        return numcount;
      }
      else if (numcount == -2 || numcount == 2){
        slide1.style.display="none";
        slide2.style.display ="none";
        slide3.style.display = "inline-flex";
        dot2.style.backgroundColor = "lightgreen";
        dot1.style.backgroundColor = "lightgreen";
        dot3.style.backgroundColor = "green";
        console.log(numcount);
        return numcount;
        
      }
      else {
        slide1.style.display="inline-flex";
        slide2.style.display ="none";
        slide3.style.display = "none";
        dot2.style.backgroundColor = "lightgreen";
        dot1.style.backgroundColor = "green";
        dot3.style.backgroundColor = "lightgreen";
        console.log(numcount);
        numcount = 0;
        return numcount;
      }
  }
  function functshowup(){
    showupdiv1.style.display="none";
  }
  function functaxilshowup(){
    console.log("taxil");
    showupdiv1.style.display = "block";
    showphoto.style.backgroundImage = "url('image/karina-vorozheeva-brQS8ihqRq4-unsplash.png')";
  }
  function funcgardenshowup(){
    console.log("garden");
    showupdiv1.style.display = "block";
    showphoto.style.backgroundImage = "url('image/markus-spiske-k2BDz7QXuJM-unsplash.png')";
  }
  function funcwomenphotoshowup(){
    console.log("women");
    showupdiv1.style.display = "block";
    showphoto.style.backgroundImage = "url('image/close-up-woman-harvesting-garden.png')";
  }
  function funcwhatherphotoshowup(){
    console.log("whather");
    showupdiv1.style.display = "block";
    showphoto.style.backgroundImage = "url('image/markus-spiske-sFydXGrt5OA-unsplash.png')";
  }
  function funckolphotoshowup(){
    console.log("kol");
    showupdiv1.style.display = "block";
    showphoto.style.backgroundImage = "url('image/markus-winkler-HeqXGxnsnX4-unsplash.png')";
  }
  function funcbagphotoshowup(){
    console.log("bag");
    showupdiv1.style.display = "block";
    showphoto.style.backgroundImage = "url('image/adele-payman-2oYMwuFgnTg-unsplash.png')";
  }
  for (let i =0 ; i<taxilphoto.length; i++){
    taxilphoto[i].addEventListener("click", functaxilshowup , true);
  }
  for (let i =0 ; i<gardenphoto.length; i++){
    gardenphoto[i].addEventListener("click", funcgardenshowup , true);
  }
  for (let i =0 ; i<womenphoto.length; i++){
    womenphoto[i].addEventListener("click", funcwomenphotoshowup , true);
  }
  for (let i =0 ; i<whatherphoto.length; i++){
    whatherphoto[i].addEventListener("click", funcwhatherphotoshowup , true);
  }
  for (let i =0 ; i<kolphoto.length; i++){
    kolphoto[i].addEventListener("click", funckolphotoshowup , true);
  }
  for (let i =0 ; i<bagphoto.length; i++){
    bagphoto[i].addEventListener("click", funcbagphotoshowup , true);
  }