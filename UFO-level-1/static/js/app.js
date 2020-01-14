// from data.js
var tableData = data;

// YOUR CODE HERE!
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.


// Select the button
var button = d3.select(".btn");

button.on("click", function() {

  //FILTERING by datetime here
    // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  ////////////// THIS IS THE ARRAY TO APPEND
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);
  //END FILTERING by datetime here

  //APPEND data to table
  filteredData.forEach(appendData);

  function appendData() {
    // select the unordered list element by id name
    var table = d3.select("#ufo-table");

    //define the data variables
    var date = filteredData.datetime;
    var city = filteredData.city;
    var state = filteredData.state;
    var country = filteredData.country;
    var shape = filteredData.shape;
    var duration = filteredData.durationMinutes;
    var comments = filteredData.comments;
    console.log(comments)

    var row = ("<tr>");
    row.append("<td>test1</td>")
        .append($("<td>Text-2</td>"))
        .append($("<td>Text-3</td>"))
        .append($("<td>Text-4</td>"))
        .append($("<td>Text-5</td>"))
        .append($("<td>Text-6</td>"))
        .append($("<td>Text-7</td>"));
    }

});











