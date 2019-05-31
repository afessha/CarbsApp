var food = {};
function handleSuccess() {
  var data = JSON.parse(this.responseText);
  for (var item in data) {
    if (data.hasOwnProperty(item)) {
      var li = document.createElement("li");
      li.className += "collection-item avatar";

      var item1 = document.createElement("li");
      item1.className += "material-icons circle green";
      item1.textContent = "brightness_1";

      var item2 = document.createElement("p");
      item2.className += "Title";
      item2.textContent = data[item]["name"];

      var item3 = document.createElement("p");
      item3.textContent = data[item]["nutritionper100gcarbohydrate"] + " Carbs";

      var item4 = document.createElement("p");
      item4.textContent = data[item]["nutritionper100gsugars"] + " Sugar";

      var item5 = document.createElement("a");
      item5.href = "/food";
      item5.className += "secondary-content food-item";
      item5.setAttribute("data-name", data[item]["name"]);
      item5.setAttribute("data-fat", data[item]["nutritionper100gfat"]);
      item5.setAttribute(
        "data-carbs",
        data[item]["nutritionper100gcarbohydrate"]
      );
      item5.setAttribute("data-sugar", data[item]["nutritionper100gsugars"]);
      item5.setAttribute("data-protein", data[item]["nutritionper100gprotein"]);
      item5.setAttribute("data-energy", data[item]["nutritionper100genergy"]);

      var item5_child = document.createElement("i");
      item5_child.className = "material-icons";
      item5_child.innerHTML = "grade";
      item5.appendChild(item5_child);

      li.appendChild(item1);
      li.appendChild(item2);
      li.appendChild(item3);
      li.appendChild(item4);
      li.appendChild(item5);

      var result = document.getElementById("foods");
      result.appendChild(li);

      if (item5.addEventListener) {
        item5.addEventListener("click", function(event) {
          var target = event.currentTarget;
          sessionStorage.clear();
          sessionStorage.setItem("food-name", target.getAttribute("data-name"));
          sessionStorage.setItem("fat", target.getAttribute("data-fat"));
          sessionStorage.setItem("carb", target.getAttribute("data-carbs"));
          sessionStorage.setItem("sugar", target.getAttribute("data-sugar"));
          sessionStorage.setItem(
            "protein",
            target.getAttribute("data-protein")
          );
          sessionStorage.setItem("energy", target.getAttribute("data-energy"));
        });
      }
    }
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
