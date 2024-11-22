
const button = document.getElementById('toggle');

button.addEventListener('click', () => {
  const body = document.body;
  if (body.style.backgroundColor === 'white' || body.style.backgroundColor === '') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'white';
  }
});
