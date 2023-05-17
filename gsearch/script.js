function searchGoogle() {
    var query = document.getElementById("search-input").value;
    window.location.href = "https://www.google.com/search?q=" + query;
}

function feelingLucky() {
    var query = document.getElementById("search-input").value;
    window.location.href = "https://www.google.com/search?q=" + query + "&btnI=1";
}
  
function imageSearch() {
    var query = document.getElementById("search-input").value;
    window.location.href = "https://www.google.com/search?tbm=isch&q=" + query;
}

function clearSearchInput() {
  document.getElementById("search-input").value = "";
}

function advancedSearch() {
    var allWords = document.getElementById("all-words").value;
    var exactPhrase = document.getElementById("exact-phrase").value;
    var anyWords = document.getElementById("any-words").value;
    var noneWords = document.getElementById("none-words").value;
    var query = "https://www.google.com/search?q=";
    if (allWords) {
      query += encodeURIComponent(allWords) + "+";
    }
    if (exactPhrase) {
      query += encodeURIComponent("\"" + exactPhrase + "\"") + "+";
    }
    if (anyWords) {
      query += encodeURIComponent(anyWords) + "+";
    }
    if (noneWords) {
      query += encodeURIComponent("-" + noneWords) + "+";
    }
    window.location.href = query.slice(0, -1);
}
  
function goToGoogleSearch() {
    window.location.href = "google-search.html";
}
  
function goToImageSearch() {
    window.location.href = "google-image-search.html";
}
  
function goToAdvancedSearch() {
    window.location.href = "google-advanced-search.html";
}

function checkEnter(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      searchGoogle();
  }
}