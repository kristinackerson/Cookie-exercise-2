(function playCookieClicker() {
  setTimeout(function() { if (Game.cookiesEarned < 1000000) { Game.Reset(); window.alert('You ran out of time before reaching 1 Million cookies :('); }}, 1 * 60 * 1000);
  
  
  //Clickable cookie
  var bigCookie = document.getElementById('bigCookie');


// Change inner html of cookie to '10 cookie per second'
	function updateCookieCount() {
		var cookies = document.getElementById('cookies');
		cookies.innerHTML = '10 cookies per second';
	};

	
// If cookie is clicked
	bigCookie.addEventListener('click', updateCookieCount, false);
 
 
})();

/*

	var cookieNumbers = document.getElementById('cookieNumbers');
	cookieNumbers = 5;



	bigCookie.addEventListener('click', showContents, false); 
 
 
	function showContents() {
		console.log(cookieNumbers.innerHTML);
	}

*/