var button = document.querySelector('button');
var image = document.querySelector('img');

button.addEventListener('click', handleClick);

function handleClick() {
  image.classList.toggle('hide');
}