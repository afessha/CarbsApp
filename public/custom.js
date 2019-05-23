function handleSuccess() {}
function handleError() {}

//create an XHR object
var xhr = new XMLHttpRequest();
xhr.open("GET", "/foods");
xhr.onload = handleSuccess;
xhr.onerror = handleError;
xhr.send();
