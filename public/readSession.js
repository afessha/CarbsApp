window.onload = function() {
  document.getElementById("name").innerHTML =
    "Nutrients per 100g 0f " + sessionStorage.getItem("food-name");

  var fat = "Fat: " + sessionStorage.getItem("fat");
  document.getElementById("fat").innerHTML = fat;

  var carb = "Carbs: " + sessionStorage.getItem("carb");
  document.getElementById("carb").innerHTML = carb;

  var sugar = "Sugar: " + sessionStorage.getItem("sugar");
  document.getElementById("sugar").innerHTML = sugar;

  var protein = "Protein: " + sessionStorage.getItem("protein");
  document.getElementById("protein").innerHTML = protein;
  var energy = "Energy: " + sessionStorage.getItem("energy");
  document.getElementById("energy").innerHTML = energy;
};
