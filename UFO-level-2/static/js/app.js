// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Fill in table with the data
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Make sure the table is empty before search
  tbody.html("");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#variable");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  // Filter the data on the various filters
  var filteredData = tableData.filter(ufoforday => ufoforday.datetime === inputValue || ufoforday.city === inputValue || ufoforday.state === inputValue || ufoforday.country === inputValue || ufoforday.shape === inputValue);
                                                                    
  console.log(filteredData);

  // Fill in table with the filtered data
  filteredData.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
};
