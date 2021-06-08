const userId = document.querySelector('.result');

runToast = (text) => {
  const option = {
    text : text,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    offset: {
    x: 50,
    y: 120},
    position: "right",
    backgroundColor: "linear-gradient(to right, #FBD786, #f7797d)",
  }
  Toastify(option).showToast()
}

runToast(userId.innerText);
