let toggleOn = document.querySelectorAll(".fa-toggle-on");
let toggleOff = document.querySelectorAll(".fa-toggle-off");
let activeRider = document.querySelectorAll(".activeRider");
let inactiveRider = document.querySelectorAll(".inactiveRider");


function toggleOnButton() {
    alert("Are you sure about active Rider Name'?");


    toggleOn.classList.toggle("activeToggle");
    toggleOff.classList.toggle("activeToggle");
    inactiveRider.classList.toggle("activeToggle");
    activeRider.classList.toggle("activeToggle");

}


function toggleOffButton() {
    alert("Are you sure about terminate Rider Name?");
    toggleOn.classList.toggle("activeToggle");
    toggleOff.classList.toggle("activeToggle");
    inactiveRider.classList.toggle("activeToggle");
    activeRider.classList.toggle("activeToggle");

}