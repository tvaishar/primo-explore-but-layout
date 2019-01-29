/* consts begin*/
var searchArray = window.location.search.split('&');
function findView(url_fragment) {
  return url_fragment.search('vid') + 1; //bool value created (search returns -1 when not found, we need 0 for false)
}
function findLang(url_fragment) {
  return url_fragment.search('lang') + 1; //bool value created (search returns -1 when not found, we need 0 for false)
}
var viewArray = searchArray[searchArray.findIndex(findView)].split('=');
var viewName = viewArray[1];

/*viewName="420BUT_AUGUPD";*/

if (searchArray.findIndex(findLang) == -1 )
		{
		var viewLang = "cs_CZ";	
		}
else
		{
		var viewArray = searchArray[searchArray.findIndex(findLang)].split('=');
		var viewLang = viewArray[1];	
		}

var tipNumber = Math.floor((Math.random() * 16)+ 1); //16 tips, starting with 1

/*var viewLang = "cs_CZ";*/
/* tipNumber=1; */

/* consts end*/