// from data.js
var tableData = data;

// YOUR CODE HERE!
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// Select the button
var button = d3.select(".btn");

// Button function
button.on("click", function() {
    var tbody = d3.select("tbody");
    tbody.html("");
  //FILTERING by datetime here
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
  
    ////////////// THIS IS THE ARRAY TO APPEND
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
  //END FILTERING by datetime here

  //APPEND data to table by looping thorugh each instance
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

})
