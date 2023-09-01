// Function to handle checkbox change
// Function to handle checkbox change
function handleCheckboxChange(event) {
    const selectedValues = [];
    const checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.id);
        }
    });

    console.log(selectedValues);
    // You can use the selectedValues array for further processing
}

// Function to attach event listeners to checkboxes
function attachCheckboxEventListeners() {
    const checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });
}

// Call the function to attach event listeners
attachCheckboxEventListeners();

  function getJayedValue() {
    var jayedInputs = document.getElementsByName("jayed");
    for (var i in jayedInputs) {
        if (jayedInputs[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

  

function onClickedEstimatePrice() {
    var textBoxValue = document.getElementById("mileage").value;
            if (textBoxValue === "") {
                alert("Pleas fill Average mileage box ");
            } else {
                console.log("Estimate price button clicked");

    // Get DOM elements
    var carMakes = document.getElementById("car_makes_dropdown");
    var carModel = document.getElementById("model");
    var mileage = document.getElementById("mileage");
    var jayed = getJayedValue(); // Replace with the actual function
    var year = document.getElementById("year");
    var transmission = document.getElementById("transmission");
    var fuel = document.getElementById("fuel");
    var condition = document.getElementById("condition");
    var paint = document.getElementById("paint");
    var estPrice = document.getElementById("uiEstimatedPrice");
var url = "http://127.0.0.1:8005/predict_car_price"; 
 
    var postData = {
car_make: carMakes.value,
        car_model: carModel.value,
        car_year: year.value,
        transmission: transmission.value,
        fuel: fuel.value,
        condition: condition.value,
        paint: paint.value,
        jayed: jayed,
        average_mileage: parseFloat(mileage.value),
        "Touch Screen": document.getElementById("touch_screen").checked ? 1 : 0,
        "Leather Seats": document.getElementById("leather_seat").checked ? 1 : 0,
        "Apple CarPlay": document.getElementById("Apple_car").checked ? 1 : 0,
        "Heated Steering Wheel": document.getElementById("heat_steering").checked ? 1 : 0,
        "Electric Seat Control": document.getElementById("electric_seat_control").checked ? 1 : 0,
        "Lane Departure Alert": document.getElementById("lane_departure").checked ? 1 : 0,
        Radar: document.getElementById("radar").checked ? 1 : 0,
        "Forward Collision Alert": document.getElementById("forward_colision").checked ? 1 : 0,
        "Park assist": document.getElementById("park_assist").checked ? 1 : 0,
        "_360 Camera": document.getElementById("_360camera").checked ? 1 : 0,
        "Android Auto": document.getElementById("Android").checked ? 1 : 0,
        "Rear Camera": document.getElementById("Rear_camera").checked ? 1 : 0,
        "Heated Seats": document.getElementById("Heated_seat").checked ? 1 : 0,
        "Electrically Folding Mirrors": document.getElementById("Folding_Miror").checked ? 1 : 0,
        Sunroof: document.getElementById("sun_roof").checked ? 1 : 0,
        "Keyless Entry": document.getElementById("Keyless").checked ? 1 : 0,
        "Rear Sensors": document.getElementById("rear_sensor").checked ? 1 : 0
    };

    console.log("Data to be sent:", postData); // Log the data before sending
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.estimated_price);
        var estPrice = document.getElementById("uiEstimatedPrice");
        estPrice.innerHTML = "<h4>" + data.estimated_price.toString() + " jod</h4>";
    })
    .catch(error => {
        console.error("Error:", error);
    });
            }
        
    
  }




// Function to get selected checkbox values
function getSelectedCheckboxValues() {
    const selectedValues = [];
    const checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        selectedValues.push(checkbox.checked ? 1 : 0); // Push 1 if checked, 0 if not checked
    });

    return selectedValues;
}


document.addEventListener("DOMContentLoaded", function() {
    // Attach event listener to the estimate price button
    document.getElementById("estimatePriceButton").addEventListener("click", onClickedEstimatePrice);
});

$(document).ready(function() {
    onPageLoad();
});
$(document).ready(function() {
    Model(); // Call the function when the document is ready
});
$(document).ready(function() {
    Transmision(); // Call the function when the document is ready
});
$(document).ready(function() {
    fuel(); // Call the function when the document is ready
});
$(document).ready(function() {
    condition(); // Call the function when the document is ready
});

function onPageLoad() {
    console.log("document loaded");
    
    var url = "http://127.0.0.1:8005/car_makes";
    
    $.get(url, function(data, status) {
        console.log("got response for get_car_makes request");
        if (data && data.car_makes) {
            var carMakesDropdown = document.getElementById("car_makes_dropdown");
            carMakesDropdown.innerHTML = "";

            data.car_makes.forEach(function(make) {
                var option = document.createElement("option");
                option.value = make;
                option.textContent = make;
                carMakesDropdown.appendChild(option);
            });
        }
    });
}
function Model() {
    console.log("document loaded");

    var url = "http://127.0.0.1:8005/model";

    $.get(url, function(data, status) {
        console.log("got response for get_model request");
        if (data && data.model) { // Change from data.models to data.model
            var modelDropdown = document.getElementById("model"); // Assuming you have an element with the ID "model"
            modelDropdown.innerHTML = "";

            data.model.forEach(function(model) { // Change from data.models to data.model
                var option = document.createElement("option");
                option.value = model;
                option.textContent = model;
                modelDropdown.appendChild(option);
            });
        } else {
            console.log("No valid model data found in response.");
        }
    });
}
function Transmision() {
    console.log("document loaded");

    var url = "http://127.0.0.1:8005/Transmission";

    $.get(url, function(data, status) {
        console.log("got response for get_transmission request");
        console.log(data); // Check the received data in the console
        if (data && data.Transmission) {
            var transmissionDropdown = document.getElementById("transmission");
            transmissionDropdown.innerHTML = "";

            data.Transmission.forEach(function(transmission) {
                var option = document.createElement("option");
                option.value = transmission;
                option.textContent = transmission;
                transmissionDropdown.appendChild(option);
            });
        } else {
            console.log("No valid transmission data found in response.");
        }
    });
}
function fuel() {
    console.log("document loaded");

    var url = "http://127.0.0.1:8005/fuel";

    $.get(url, function(data, status) {
        console.log("got response for get_fuel request");
        if (data && data.fuel) {
            var fuelDropdown = document.getElementById("fuel");
            fuelDropdown.innerHTML = "";

            data.fuel.forEach(function(fuelType) {
                var option = document.createElement("option");
                option.value = fuelType;
                option.textContent = fuelType;
                fuelDropdown.appendChild(option);
            });
        } else {
            console.log("No valid fuel data found in response.");
        }
    });
}
function condition() {
    console.log("document loaded");

    var url = "http://127.0.0.1:8005/condition"; // Make sure this URL is correct

    $.get(url, function(data, status) {
        console.log("got response for get_condition request");
        if (data && data.condition) {
            var conditionDropdown = document.getElementById("condition");
            conditionDropdown.innerHTML = "";

            data.condition.forEach(function(conditionType) {
                var option = document.createElement("option");
                option.value = conditionType;
                option.textContent = conditionType;
                conditionDropdown.appendChild(option);
            });
        } else {
            console.log("No valid condition data found in response.");
        }
    });
}

function year() {
    console.log("Document loaded");

    var url = "http://127.0.0.1:8005/year"; // Replace with the correct URL

    $.get(url, function(data, status) {
        console.log("Got response for years request");
        if (data && data.year) {
            var yearDropdown = document.getElementById("year");
            yearDropdown.innerHTML = "";

            data.year.forEach(function(year) {
                var option = document.createElement("option");
                option.value = year;
                option.textContent = year;
                yearDropdown.appendChild(option);
            });
        } else {
            console.log("No valid year data found in response.");
        }
    });
}
function Paint() {
            console.log("Document loaded");

            var url = "http://127.0.0.1:8005/paint_conditions"; // Replace with the correct URL

            $.get(url, function(data, status) {
                console.log("Got response for paint conditions request");
                if (data && data.paint_conditions && Array.isArray(data.paint_conditions)) {
                    var paintDropdown = document.getElementById("paint");
                    paintDropdown.innerHTML = "";

                    data.paint_conditions.forEach(function(condition) {
                        var option = document.createElement("option");
                        option.value = condition;
                        option.textContent = condition;
                        paintDropdown.appendChild(option);
                    });
                } else {
                    console.log("No valid paint conditions data found in response.");
                }
            }).fail(function() {
                console.log("Failed to fetch paint conditions data.");
            });
        }

        // Trigger the Paint function when the page is fully loaded
        window.addEventListener("load", Paint);

// Call the function when the document is ready
$(document).ready(function() {
    Paint();
})
$(document).ready(function() {
    year();
});


  window.onload = onPageLoad;