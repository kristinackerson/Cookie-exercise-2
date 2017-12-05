(function playCookieClicker() {
  setTimeout(function() { if (Game.cookiesEarned < 1000000) { Game.Reset(); window.alert('You ran out of time before reaching 1 Million cookies :('); }}, 1 * 60 * 1000);
  
  // all of your code goes here
  
var cookies = document.getElementById('cookies');
var bigCookie = document.getElementById('bigCookie');


// When cookie is clicked, change inner html to 1 cookie per second
function updateCookieCount() {
	cookies.innerHTML = '10 cookies per second';
};
bigCookie.addEventListener('click', updateCookieCount, false);
 
 
 
})();