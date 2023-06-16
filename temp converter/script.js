

function convertToCelsius() {
  var fahrenheitInput = document.getElementById("fahrenheit");
  var celsiusInput = document.getElementById("celsius");
  var result = document.getElementById("result");

  if (fahrenheitInput.value !== "") {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    celsiusInput.value = celsius.toFixed(2);
    result.textContent = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
  } else {
    result.textContent = "Please enter a temperature in Fahrenheit.";
  }
}

function convertToFahrenheit() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var result = document.getElementById("result");

  if (celsiusInput.value !== "") {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    result.textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
  } else {
    result.textContent = "Please enter a temperature in Celsius.";
  }
}