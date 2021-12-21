let myImage = document.querySelector('#main1image');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/main/kulinarija.jpg') {
		myImage.setAttribute('src', 'images/main/potatos-8272620.jpg');
	} else {
		myImage.setAttribute('src', 'images/main/kulinarija.jpg')
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Пожалуйста, введи свое имя:');
	if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = myName + " приветствую Тебя в саду Софии!";
  }
}


if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + ' приветствую Тебя в саду Софии!';
}

myButton.onclick = function() {
	setUserName();
}