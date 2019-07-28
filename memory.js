Array.prototype.randomize = function() { //adauga niste metoda/prop extra
  //algoritm de shuffle
    var i = this.length, j, tmp; //this length e lungimea arrayului initial, tmp o cauta goala in care sa stocam imaginea TEMPORALA
    while(--i) { // facem asta pentru ca e arrayul e de la 0 la i-1
      j = Math.floor(Math.random()) * (i-1); // (i-1) - val maxima
      tmp = this[i];
      this[i] = this[j];
      this[j] = tmp;
    }
}

var animals = [
    "turtle",
    "snail",
    "corgi",
    "parrot",
    "rabbit",
    "bear",
    "panda",
    "fish",
    "crab",
    "pig",
    "shark",
    "rhinoceros"
];

var images = [];
var i;
for (i = 0; i < 12; i++) {
  var url = 'https://png.icons8.com/' + animals[i] + 'color/96'; //concatenam numele imaginii 2. var url - e calea catre imagine 2. '/color/96' - e ca sa genereze imaginile color
  images.push(url); // araugam imaganile in var images
  images.push(url);
}
images.randomize(); //adaugam metada randomize pe array
var html = '<ul>';
for (var i = 0; i < 24; i++) {
  html += '<li><img src="' + images[i] + '"/></li>'; // 1. la html-ul nostru adaugam elementul <li>
}
html +='</ul>';
document.getElementById('board').innerHTML = html;
