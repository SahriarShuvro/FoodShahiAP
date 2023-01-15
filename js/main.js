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

{
    function bonusCheckYes() {
        let salaryBonusInputYes = document.getElementById("salaryBonusInputYes");
        let salaryBonusInput = document.getElementById("salaryBonusInput");

        if (salaryBonusInputYes.checked == true) {
            salaryBonusInput.classList.add('activeYes');
            salaryBonusInput.classList.remove('activeNo');
        } else {
            salaryBonusInput.classList.remove('activeYes');

        }
    }

    function bonusCheckNo() {
        let salaryBonusInputNo = document.getElementById("salaryBonusInputNo");
        let salaryBonusInput = document.getElementById("salaryBonusInput");

        if (salaryBonusInputNo.checked == true) {
            salaryBonusInput.classList.add('activeNo');
            salaryBonusInput.classList.remove('activeYes');
        } else {
            salaryBonusInput.classList.remove('activeNo');
        }
    }





    // let salaryBonusCheckYes = document.getElementById("salaryBonusCheckYes");
    // let salaryBonusCheckNo = document.getElementById("salaryBonusCheckNo");

    // let salaryBonusInput = document.getElementById("salaryBonusInput");

    // function bonusCheckYes() {
    //     if (salaryBonusCheckYes.checked == true) {
    //         salaryBonusInput.style.display = "block";
    //     } else {
    //         salaryBonusInput.style.display = "none";
    //     }
    // }

    // function bonusCheckNo() {
    //     if (salaryBonusCheckNo.checked == true) {
    //         salaryBonusInput.style.display = "none";
    //     }
    // }


}