var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/cayo1.jpeg') { 
      myImage.setAttribute ('src','bilder/cayo2.jpeg');
	  } else
	if(mySrc === 'bilder/cayo2.jpeg') { 
      myImage.setAttribute ('src','bilder/cayo3.jpeg');
   } else { 
      myImage.setAttribute ('src','bilder/cayo1.jpeg');
	  }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Magst du Hunde, ' + myName +'?';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Magst du Hunde, ' + storedName + '?';
}
myButton.onclick = function() {
  setUserName();
}