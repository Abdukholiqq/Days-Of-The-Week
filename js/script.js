let elForm = document.querySelector("form");
let elInput = document.querySelector("#number");
let elBtn = document.querySelector("button");
let elDays = document.querySelector(".days");
const titletext = document.createElement("h4");

elForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  
  let num = elInput.value 

  elDays.appendChild(titletext);
 switch (num) {
   case  "1" :
  titletext.textContent = "Dushanba" 
   break ;
   
   case '2' :
    titletext.textContent = "Seshanba"   
    break ;

    case '3' :
    titletext.textContent = "Chorshanba"   
    break ;

    case '4' : 
       titletext.textContent = "Payshanba" ; 
    break ;

  case '5' : 
titletext.textContent = "Juma" ;

  break ;
  case '6' : 
    titletext.textContent = "Shanba"  
    break ;
    
    case '7' : 
       titletext.textContent = `YakShanba `
       elDays.appendChild(titletext);  
       break ;
 }
 elInput.value = '' ;
})