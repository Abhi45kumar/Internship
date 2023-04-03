function convert() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    let result;
  
    if (from === "C" && to === "F") {
      result = (temperature * 9/5) + 32;
    } else if (from === "C" && to === "K") {
      result = temperature + 273.15;
    } else if (from === "F" && to === "C") {
      result = (temperature - 32) * 5/9;
    } else if (from === "F" && to === "K") {
      result = (temperature + 459.67) * 5/9;
    } else if (from === "K" && to === "C") {
      result = temperature - 273.15;
    } else if (from === "K" && to === "F") {
      result = (temperature * 9/5) - 459.67;
    } else {
      result = temperature;
    }
  
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + to;
  }
  