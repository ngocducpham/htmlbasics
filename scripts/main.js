let myImage = document.querySelector("img");

myImage.onclick = function () {
  let imgScr = myImage.getAttribute("src");
  if (imgScr === "./image/firefox-logopng.png") {
    myImage.setAttribute("src", "./image/firefox-original.webp");
  } else {
    myImage.setAttribute("src", "./image/firefox-logopng.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is Cool, " + storedName;
}

function setUserName() {
  let myName = prompt("Enter your name:");
  if (!myName || myName === null) {
    return;
    // gọi đệ quy setUserName() để hiện thông báo liên tục khi không nhập 
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is Cool, " + myName;
  }
}

myButton.onclick = function () {
    setUserName();
  };