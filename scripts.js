var webTitle = document.getElementById('web-title');
var webUrl = document.getElementById('web-url');
var enter = document.getElementById('enter');
var webCard = document.querySelectorAll('.web-cards');
var readCard = document.getElementById('read-link');
var deleteCard = document.getElementById('delete-link');
var cardWebTitle = document.getElementById('card-web-title');
var cardWebUrl = document.getElementById('card-web-link');
var cardStack = document.getElementById('bookmarks');


////CODE RE-WORKED, ENTER BUTTON NOW FUNCTIONAL TO BE DISABLED.
function enableButton() {
  var title = $('#web-title').val();
  var url = $('#web-url').val();

  if( title !== "" || url !== "") {
    $('#enter').prop('disabled', false);
  } else if( title === "" || url === "") {
    $('#enter').prop('disabled', true);
  }
}
$('#web-title, #web-url').on('input', enableButton);

/////// Validating URL /////
function validUrl() {
    var userInput = $('#web-url').val()
    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    var url = new RegExp(regexQuery,"i");

    if (url.test(userInput)) {
      createBookmark();
      // linksCounter();
    } else {
      alert(userInput + ' is an invalid URL');
    return false;
  }
}

////<<<<THIS IS NECESSARY TO PROPERLY RUN OUR CODE- UNTIL WE REWORK THE ENTER DISABLE BUTTON>>>>>>>>>>>>>>>
function inputComplete() {
  if (webTitle.value === "" || webUrl.value === "") {
    alert("Please complete all input fields")
  } else {
    validUrl();
  }
}
//// Added lines 37, 38 to clear fields upon bookmark creation.
enter.addEventListener('click', function(){
  inputComplete();
  webTitle.value = '';
  webUrl.value = ''
  enableButton();
})

function createBookmark() {
  var webTitleValue = webTitle.value;
  var webUrlValue = webUrl.value;
  var hrefValue = document.getElementById('web-url').href = "webUrlValue.innerText";
  var newBookmark = document.createElement('article');
  newBookmark.setAttribute('id', webTitleValue);
  cardStack.appendChild(newBookmark);
  var webCard = document.getElementById(webTitleValue);

  webCard.innerHTML = `<article class="web-cards">
    <h3 class="card-web-title">  ${webTitleValue}  </h3>
    <hr id="hr1">
    <a id="card-web-link" class="links" href="hrefValue">  ${webUrlValue}  </a>
    <hr id="hr2">
    <button id="read-link" class="read-delete read-button" type="button">Read</button>
    <button id="delete-link" class="read-delete delete-button" type="button">Delete</button>
  </article>`
}

////When .read has been added document.createElement('button') at the top of the bookmarks section to clear all read bookmarks. this should be accomplished with .remove() of all cards with the class of .read

$('.card-stack').on('click', 'button.read-button', function(){
  $(this).toggleClass('read');
  $(this).parent().toggleClass('backgroundColor');
})

$('.card-stack').on('click', 'button.delete-button', function(){
  $(this).parents('.web-cards').remove();
})
