

var fltrdate = d3.select("#filter-btn")
var table = d3.select("#ufo-table")
var datetimeinput = d3.select("#datetime")

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and add data to table
function loadbody(thisdata) {
    tbody.html("");
    thisdata.forEach(function(UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key,value]) => {
            //console.log(value);
            var cell=row.append("td");
            cell.text(value);
        });
    });
}

loadbody(data);

function handledate() {
    var inputDate = d3.select("#datetime").property("value");
    filteredData = data.filter(UFO => UFO.datetime === inputDate);
    loadbody(filteredData);
}



fltrdate.on("click",handledate);
datetimeinput.on("change",handledate);
console.log("The End");