let searc = document.getElementById('search');
searc.addEventListener('click', seacrani , true);
let searcadd = document.getElementById('searchadd');
let removesearch = document.getElementById('removesearch');
removesearch.addEventListener("click" , searcremove , true);
let loqonav = document.getElementById('loqo_nav');
let btinput = document.getElementById("bt_input");
let btclose = document.getElementById("close_bt");
let navbar = document.getElementById("navbar");
let infob = document.getElementById("infob");
let ulnavsnow = document.getElementById("ulnav");
let navbarbtsnow = document.getElementById("bt_nav_snow");
navbarbtsnow.addEventListener("click" , navfuncshow , true);
let clknum = 0;
var sticky = navbar.offsetTop;
function seacrani(){
    searc.style.display="none";
    if ( searc.style.display === "none"){
      searcadd.style.display = "inline-block";
      ulnavsnow.style.marginLeft = "0%";
      navbar.style.width = "100%";
    }
    else if (screen.width < 767){
      searcadd.style.display = "none";
      console.log("catttu");
    }
    else{
      log("ndinosnd");
    }
  }
  function searcremove(){
      if (screen.width < 767) {
          searcadd.style.display = "none";
          searc.style.display="inline-block";
          console.log("catttu2");
      }
      else {
          navbar.style.width = "100%";
          ulnavsnow.style.marginLeft = "13.5%";
          searc.style.display = "inline-block";
          searcadd.style.display = "none";
          console.log("catttu4");
      }
    
  }
  function myFunction() {
    if (window.scrollY >= sticky) {
    navbar.classList.add("fixed");
    navbar.style.width = "100%";
    infob.classList.add("remove");
    } else {
    navbar.classList.remove("fixed");
    navbar.style.width = "90%";
    infob.classList.remove("remove");
    }
  }
  function navfuncshow(){
    searc.style.display="none";
    ulnavsnow.style.display="flex";
    loqonav.style.display = "none";
    navbarbtsnow.style.marginLeft = "0px";
    clknum++;
    console.log("nnfsoenfo");
    if(clknum % 2 == 0){
      console.log("clknum1111");
      searc.style.display="none";
      ulnavsnow.style.display="none";
      loqonav.style.display = "inline-block";
      navbarbtsnow.style.marginLeft = "30%";
      navbar.style.width = "95%";
      searcadd.style.display = "none";
      btinput.style.color = "white";
      navbarbtsnow.style.backgroundColor = "transparent";
      btclose.style.display = "none";
      btinput.style.display = "inline-block";
    }
    else{ searc.style.display="inline-block";
    ulnavsnow.style.display="flex";
    loqonav.style.display = "none";
    btinput.style.color = "black";
    searcadd.style.display = "inline-block";
    navbarbtsnow.style.backgroundColor = "white";
    btclose.style.display = "inline-block";
    searc.style.display="none";
    btinput.style.display = "none";
    }
    return clknum;
  }