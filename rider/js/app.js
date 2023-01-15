// Rider Salary Type 

let riderSalaryType = document.getElementById("riderSalaryType");
let fixed = document.getElementById("fixed");
let commission = document.getElementById("commission");


function riderTypeCB() {
    let riderTypeOfSalary = riderSalaryType.value;
    if (riderTypeOfSalary === "Fixed") {
        fixed.setAttribute("style", "display:block")
        commission.setAttribute("style", "display:none");
    } else if (riderTypeOfSalary === "Commission") {
        fixed.setAttribute("style", "display:none");
        commission.setAttribute("style", "display:block");
    }
}

document.addEventListener("click", function() {
    return riderTypeCB();
});
window.addEventListener("load", function() {
    return riderTypeCB();
});


// Rider Type 
let riderTypeDropdwon = document.getElementById("riderTypeDropdwon");
let commissionCycle = document.getElementById("commissionCycle");
let commissionBike = document.getElementById("commissionBike");

function riderType() {
    let riderSalaryTypeForDropdown = riderTypeDropdwon.value;
    if (riderSalaryTypeForDropdown === "Bike") {
        commissionBike.setAttribute("style", "display:block");
        commissionCycle.setAttribute("style", "display:none");
    } else if (riderSalaryTypeForDropdown === "Cycle") {
        commissionCycle.setAttribute("style", "display:block");
        commissionBike.setAttribute("style", "display:none");
    }
}


document.addEventListener('click', function() {
    return riderType()
})

window.addEventListener("load", function() {
    return riderType();
});