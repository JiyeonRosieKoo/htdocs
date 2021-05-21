//const show = document.querySelector('.header > button');

// show.addEventListener("click", ()=>{
//   Toastify({
//   text: "This is a toast",
//   duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
//   newWindow: true,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "right", // `left`, `center` or `right`
//   backgroundColor: "linear-gradient(to right, #FBD786, #f7797d)",
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   onClick: function(){} // Callback after click
// }).showToast();
// });

//Variation
let SETTING_TIME = 5;
const URL = "https://random-word-api.herokuapp.com/word?number=100";
let words = [];
let time;
let isPlaying = false;
let isReady = false;
let score = 0;
let timeInterval;


const wordDisplay = document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");
const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const text_area = document.querySelector('.text_area > span');

//Functions
runToast = (text) => {
  const option = {
    text : text,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: 'top',
    position: "right",
    backgroundColor: "linear-gradient(to right, #FBD786, #f7797d)",
  }
  Toastify(option).showToast()
}

const getWords = () => {
  axios.get(URL).then(res => {
    words = res.data.filter(word=>word.length < 8);
    button.innerText = 'Game Start';
    isReady = true;
    button.classList.remove('loading');
  }).catch(err => console.log(err))
}

const init = () => {
  time = SETTING_TIME;
  getWords();
}


const countDown = () => {
  if(time > 0){
    time --;
    console.log(time);
  }else{
    clearInterval(timeInterval);
    isPlaying = false;
    alert('Game Over', init());
  }
  timeDisplay.innerText = time;
}


const checkMatch = () => {
  if(!isPlaying){
    return;
  }
  if(wordDisplay.innerText.toLowerCase() === wordInput.value){
    score += 10;
    runToast(wordDisplay.innerText);
    time = SETTING_TIME;
    wordInput.value = "";
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
  }else{
  }
  scoreDisplay.innerText = score;
}

//Event Handle

init();


wordInput.addEventListener("input", checkMatch);

button.addEventListener("click", () =>{
  clearInterval(timeInterval);
  if(!isReady === false){
    timeInterval = setInterval(countDown, 1000);
    time = SETTING_TIME;
    isPlaying = true;
    wordInput.value = "";
    score = 0;
    scoreDisplay.innerText = score;
  }
})

level1.addEventListener("click", ()=> {
  if(!isPlaying === true){
    SETTING_TIME = 10;
    text_area.innerText ="10초";
  }
})

level2.addEventListener("click", ()=> {
  if(!isPlaying === true){
    SETTING_TIME = 8;
    text_area.innerText ="8초";
  }
})

level3.addEventListener("click", ()=> {
  if(!isPlaying === true){
    SETTING_TIME = 5;
    text_area.innerText ="5초";
  }
})
//Getting Ready
