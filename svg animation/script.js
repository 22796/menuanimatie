const button = document.getElementById('button');
var vlak = document.getElementsByClassName('cube');





button.addEventListener('click', cube);

function cube() {
  for (var i = 0; i < vlak.length; i++) {

toggleClass(vlak[i],200*i);




  }


}

function toggleClass(element, tijd) {
    setTimeout(function() {
  element.classList.toggle('cube-moveout');
}, tijd)
}
