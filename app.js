const hideButton = document.getElementById('clicktohide');
const elementToHide = document.getElementById('hidethis');
const rulesButton = document.getElementById('ruleshere')

hideButton.addEventListener('click', function() {
  elementToHide.style.display = 'none';
});

rulesButton.addEventListener('click', function() {
    elementToHide.style.display = 'block';
});