// const output = document.getElementById("output");
// output.innerText = "전송";
// const wrapper = document.getElementsByClassName("wrapper");
// wrapper[0].innerText = "0번째 인덱스";
//위와 같은 코드는 너무 번거롭기 때문에 Ecma6에서 부터 바뀜!
let num = 0;

const button = document.querySelector("#button");
const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");
const target = document.querySelector(".target");
const title = document.querySelector("h1");
const userId = document.querySelector("#userId");
const point = document.querySelector(".point");

target.style.color = "red";
target.style.fontSize = "15px";

title.addEventListener("click", function(){
  if(num === 0){
    title.style.color = "yellow";
    num ++;
    console.log(num);
  }else if(num < 0){
    //Error
  }else{
    title.style.color = "blue";
    num --;
    console.log(num);
  }
});

userId.addEventListener("input", function(e){
  target.innerText = this.value;
});

button.addEventListener("click", () => {
  target.style.width = "50px";
  target.style.height = "50px";
  target.style.backgroundColor = userId.value;
  target.style.borderRaius = "50%";
  target.innerText = "";
})

items.forEach(item =>{
  item.addEventListener("click", () => {
    point.innerText = item.innerText;
  })
})
