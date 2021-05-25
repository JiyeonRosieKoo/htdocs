//variation
const container = document.querySelector('.image-container');
const startButton = document.querySelector('#start-button');
const gameText = document.querySelector('.game-text');
const playTime = document.querySelector('.play-time');
const tiles = document.querySelectorAll(".image-container > li");
const cheat = document.querySelector('#cheat-button');

const dragged = {
  el: null,
  class: null,
  index: null,
};
let timeInterval = null;
let time = 0;
let isPlaying = false;

//functions

function shuffle(array){
  let index = array.length -1;
  while (index > 0){
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    index --;
    }
    return array;
}

function setGame(){
  timeInterval = setInterval(()=>{
    time ++;
    playTime.innerText = time;
    gameText.innerText = "Enjoy the game :)"
    isPlaying = true;
  },1000);
  const gameTiles = shuffle([...tiles]);
  console.log(gameTiles);
  container.innerHTML = "";
  gameTiles.forEach(tile=>{
  container.appendChild(tile);
  })
}


function checkStatus(){
  const currentList = [...container.children];
  const unMatched = currentList.filter((list, index)=>{
    return Number(list.getAttribute("data-type")) !== index
  })
  if(unMatched.length == 0){
    isPlaying = false;
    clearInterval(timeInterval);
  }
}

startButton.addEventListener('click', ()=> {
  setGame();
});

//container-> drag selector
container.addEventListener('dragstart', (e)=>{
  const obj = e.target;
  //console.log({ obj });
  dragged.el = obj; //dragged 객체의 element에 obj 정보 모두 담기
  dragged.class = obj.className; //클릭했을 때 list 클래스 이름 받아오기
  //console.log(e);
  dragged.index = [...obj.parentNode.children].indexOf(obj);
});

//drag 중
container.addEventListener('dragover', (e)=>{
  e.preventDefault();
});

//drap 후
container.addEventListener('drop', e =>{
  const obj = e.target;
  let originPlace;
  let isLast = false;

  if(dragged.el.nextSibling){
    originPlace = dragged.el.nextSibling;
  }else{
    originPlace = dragged.el.previousSibling;
    isLast = true;
  }

  const droppedIndex = [...obj.parentNode.children].indexOf(obj);
  if(dragged.index > droppedIndex){
    obj.before(dragged.el);
  }else{
    obj.after(dragged.el);
  }
  isLast ? originPlace.after(obj) : originPlace.before(obj);
  checkStatus();
});

cheat.addEventListener('click', function(){
  [...container.children].forEach(child =>{
    child.innerText = Number(child.getAttribute("data-type")) + 1;
  })
})
