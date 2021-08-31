// Tell your friends
const shareButton = document.querySelector('.tell-friends');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', (event) => {
  shareDialog.classList.add('is-open');
});

closeButton.addEventListener('click', (event) => {
  shareDialog.classList.remove('is-open');
});

// Make a donation
// Progress bar animation on adding $50
var i = 0;
function giveNow() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById('progressBar');
    var width = 75;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 83) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width + '%';
      }
    }
  }
  document.getElementById('add50').innerHTML = '$111';
}
