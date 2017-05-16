var webTitle = document.getElementById('web-title');
var webUrl = document.getElementById('web-url');
var enter = document.getElementById('enter');
var webCard = document.querySelectorAll('.web-cards');
var readCard = document.getElementById('read-link');
var deleteCard = document.getElementById('delete-link');
var cardWebTitle = document.getElementById('card-web-title');
var cardWebUrl = document.getElementById('card-web-link');
var cardStack = document.getElementById('bookmarks');


// enter.addEventListener('click', function(){
//   var webTitleValue = webTitle.value;
//   webTitle.innerText = webTitleValue;
//   cardWebTitle.innerText = webTitleValue;
//
//   var webUrlValue = webUrl.value;
//   webUrl.innerText = webUrlValue;
//   cardWebUrl.innerText = webUrlValue;
//
//   console.log("hi");

// })
enter.addEventListener('click', function(){
  createBookmark();
})

function createBookmark() {
  var newBookmark = document.createElement('article');

  var webTitleValue = webTitle.value;
  webTitle.innerText = webTitleValue;
  cardWebTitle.innerText = webTitleValue;

  var webUrlValue = webUrl.value;
  webUrl.innerText = webUrlValue;
  cardWebUrl.innerText = webUrlValue;

newBookmark.innerHTML =
'<article class="web-cards">' +
  '<h3 id="card-web-title">' + webTitleValue + '</h3>'+
  '<hr id="hr1">' +
  '<a id="card-web-link" class="links" href="#">' + webUrlValue + '</a>' +
  '<hr id="hr2">' +
  '<button id="read-link" class="read-delete" type="button">Read</button>' +
  '<button id="delete-link" class="read-delete" type="button">Delete</button>' +
'</article>'
bookmarks.appendChild(newBookmark)
}
