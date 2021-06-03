//Query variations
const quote = document.querySelector("#quote");
const menuBar = document.querySelector(".menu-bar");
const menuContents = document.querySelectorAll(".menu-contents, .hidden");
const cover = document.getElementById(".visualId");

//let variations
let i = 0;
let timeInterval = null;

//const variations
const quotes = ['Peace is always beautiful','Side by side just breathing',"Some hearts aren't blessed to beat together","Don't let the world tame your wild", 'The brain is wider than the sky'];
const coverImgUrl = ['./Games.jpg', './UGTP2.jpg', './Todo-list.jpg', 'App2.jpg'];
//Banner
function timer(){
  timeInterval = setInterval(()=>{
    if(i >= 0 && i < quotes.length)
    {
      quote.innerText = quotes[i];
      i++;
    }else{
      i = 0;
      quote.innerText = quotes[i];
      i++;
    }


  },5000);
}

const timeControl = () =>{ timer(); };
cover.src = "./App2.jpg";

//init();
timeControl();
menuBar.addEventListener('click', ()=>{
  console.log("hello");
  let menu = document.getElementById('menu');
  menu.classList.toggle("hidden");
});
