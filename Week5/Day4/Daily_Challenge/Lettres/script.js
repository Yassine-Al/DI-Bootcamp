let lettersOnlyInput = document.getElementById('input');

lettersOnlyInput.addEventListener('keypress', function(event) {
  let key = event.key;
  let regex = /[a-zA-Z]/;
  if (!regex.test(key)) {
    event.preventDefault();
  }
});

