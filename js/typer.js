const words = [" Developer", " Designer", " Programmer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function Typer() {
  if (count === words.length) {
    count = 0;
  }
  currentText = words[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typer").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(Typer, 2000);
  } else {
    setTimeout(Typer, 300);
  }
})();

function showall() {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaded").style.display = "block";
  }, 2000);
}
let menutoggler=document.querySelector(".toggle");
let mobilenav=document.querySelector(".mobilenavcontainer");

menutoggler.onclick=function(){
  menutoggler.classList.toggle("active");
  mobilenav.classList.toggle("active");
}

let anav=document.querySelectorAll(".anav");

for (let i = 0; i < anav.length; i++) {
  anav[i].addEventListener("click",()=>{
    menutoggler.classList.toggle("active");
    mobilenav.classList.toggle("active");
  })
}


function gotoSection(id){document.getElementById(id).scrollIntoView()}

// for(var i=0;i<15;i++){
//   const block=document.createElement("div");
//   block.classList.add("block");
//   document.querySelector(".actual-footer").appendChild(block);
//   block.style.transform="translate(0,"+(Math.random(-100,10)*40-30)+"px)";
// }
