function handleSuccess() {
  var data = JSON.parse(this.responseText);
  for (var item in data) {
    var li = document.createElement("li");
    li.className += "collection-item avatar";

    var item1 = document.createElement("li");
    item1.className += "material-icons circle green";
    item1.textContent = "brightness_1";

    var item2 = document.createElement("p");
    item2.className += "Title";
    item2.textContent = data[item]["name"];

    var item3 = document.createElement("p");
    item3.textContent =
      "Carbohydrate" + data[item]["nutritionper100gcarbohydrate"];
    li.appendChild(item1);
    li.appendChild(item2);
    li.appendChild(item3);

    var result = document.getElementById("foods");
    result.appendChild(li);
  }
}
function handleError() {
  //Function to handle the request if it fails/unsccesfull
  var h5 = document.getElementById("list");
  h5.style.color("red");
  h5.innerHTML = "An Error Occured";
  var error = document.getElementById("main");
  error.appendChild(h5);
}

//create an XHR object
var xhr = new XMLHttpRequest();
xhr.open("GET", "/foods");
xhr.onload = handleSuccess;
xhr.onerror = handleError;
xhr.send();
