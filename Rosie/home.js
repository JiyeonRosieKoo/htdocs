const cover = document.getElementById("visualId");
const lButton = document.getElementById("left");
const rButton = document.getElementById("right");

const coverImgUrl = ["url('https://github.com/JiyeonRosieKoo/htdocs/blob/05/28/Rosie/resources/Games.jpg?raw=true')","url('https://github.com/JiyeonRosieKoo/htdocs/blob/05/28/Rosie/resources/App2.jpg?raw=true')","url('https://github.com/JiyeonRosieKoo/htdocs/blob/05/28/Rosie/resources/UGTP2.png?raw=true')","url('https://github.com/JiyeonRosieKoo/htdocs/blob/05/28/Rosie/resources/Todo-list.jpg?raw=true')"];
let n = 0;
let timeInterval2 = null;


function timer2(){
  timeInterval2 = setInterval(()=>{
    if(n >= 0 && n < 4){
      cover.style.backgroundImage = coverImgUrl[n];
      n++;
    }else if(n === 4){
      n = 0;
      cover.style.backgroundImage = coverImgUrl[n];
      n++;
    }
    console.log(n);
  }, 8000);
}

timer2();

rButton.addEventListener('click', ()=>{
  clearInterval(timeInterval2);
  if(n >= 0 && n < 4){
    cover.style.backgroundImage = coverImgUrl[n];
    n++;
  }else if(n === 4){
    n = 0;
    cover.style.backgroundImage = coverImgUrl[n];
    n++;
  }else{
    n = 0;
    cover.style.backgroundImage = coverImgUrl[n];
  }
  console.log(n);
});

lButton.addEventListener('click', ()=>{
  clearInterval(timeInterval2);
  if(n >= 0 && n < 4){
    n--;
    cover.style.backgroundImage = coverImgUrl[n];
  }
  else if(n === 4){
    n = 3;
    cover.style.backgroundImage = coverImgUrl[n];
  }
  else if(n < 0){
    n = 3;
    cover.style.backgroundImage = coverImgUrl[n];
  }
  console.log(n);
})
