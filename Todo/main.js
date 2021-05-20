const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const clearButton = document.querySelector("#allClear");

todoInput.addEventListener("keypress", e => {
  if(e.keyCode === 13){
    generateTodo(todoInput.value);
    todoInput.value="";
  }
})

clearButton.addEventListener("click", ()=>{
  allClear();
})


const generateTodo = (todo) => {
  const li = document.createElement("li");
  const likeSpan = generateLike();
  const itemSpan = generateItem(todo);
  const manageSpan = generateManage();
  li.appendChild(likeSpan);
  li.appendChild(itemSpan);
  li.appendChild(manageSpan);
  todoList.appendChild(li);
}


const generateLike = () => {
  const span = document.createElement("span");
  const icon = document.createElement("i");
  span.classList.add("todo-like");
  icon.classList.add("material-icons");
  icon.classList.add("like");
  icon.innerText = "favorite_border";
  span.appendChild(icon);
  icon.addEventListener("click", ()=>{
    if(icon.innerText === "favorite_border"){
      icon.innerText = "favorite";
    }else{
      icon.innerText = "favorite_border";
    }
  });
  return span;
}

const generateItem = (todo) => {
  const span = document.createElement("span");
  span.classList.add("todo-item");
  span.innerText = todo;
  return span;

}

const generateManage = () => {
  const span = document.createElement("span");
  const iconCheck = document.createElement("i");
  const iconClear = document.createElement("i");
  span.classList.add("todo-manage");
  iconCheck.classList.add("material-icons");
  iconCheck.classList.add("check");
  iconCheck.innerText = "check";
  iconClear.classList.add("material-icons");
  iconClear.classList.add("clear");
  iconClear.innerText = "clear";
  span.appendChild(iconCheck);
  span.appendChild(iconClear);
  iconCheck.addEventListener("click", (e) => {
    const li = e.target.parentNode.parentNode;
    li.classList.add("done");
  })

  iconClear.addEventListener("click", (e) => {
    const li = e.target.parentNode.parentNode;
    todoList.removeChild(li);
  })
  return span;
}

const allClear = () => {
  while(todoList.hasChildNodes()){
    todoList.removeChild(todoList.firstElementChild);
  }
}
