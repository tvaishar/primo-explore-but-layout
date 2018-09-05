/* consts begin*/
var searchArray = window.location.search.split('&');
function findView(url_fragment) {
    return url_fragment.search('vid')+1; //bool value created (search returns -1 when not found, we need 0 for false)
}
var viewArray = searchArray[searchArray.findIndex(findView)].split('='); 
var viewName = viewArray[1];

/*viewName="420BUT_AUGUPD";*/

/* consts end*/