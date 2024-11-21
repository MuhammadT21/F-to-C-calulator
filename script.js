document.getElementById("btn").addEventListener("click", FahrenheitCelsius);

function FahrenheitCelsius() {
  // Input
  var num = +document.getElementById("input").value;

  // Processing
  var Convert = (num - 32) * (5 / 9);
  var round = Convert.toFixed(0);
  var Convert = round;
  document.getElementById("input").value = "";

  // Output
  document.getElementById("output").innerHTML = Convert;

  document.getElementById("thermometer").src =
    "Images/gettyimages-959035576-612x612.jpg";
}
