let btnCheck = document.querySelectorAll(".form-check-input");
let btnCheckToReact = document.querySelectorAll(".actionCol");

for (let i = 0; i < btnCheck.length; i++) {
    const btnSinleCheck = btnCheck[i];
    btnSinleCheck.addEventListener("click", function() {
        for (let x = 0; x < btnCheckToReact.length; x++) {
            const btnReact = btnCheckToReact[x];
            if (btnReact == checked) {
                alert("Done");
                btnCheck.innerHTML = btnCheck.values;
            }
        }
    });
}

console.log(`hi`);