// Pop-Up Show Hide Funtion
{
    let showPopUp = document.getElementById('showPopUp');
    let closePopUp = document.getElementById('closePopUp');

    function showPopUpTab() {
        showPopUp.classList.add('gradeAddPopUpActive')
    }

    function closePopUpTab() {
        showPopUp.classList.remove('gradeAddPopUpActive')
    }

    // Overlay Funtion
    let overlay = document.getElementById("overlay");

    function on() {
        overlay.classList.add("overlayActive");
    }

    function off() {
        overlay.classList.remove("overlayActive");
    }
}

// Pop-Up Show Hide Funtion For Edit
{
    let showPopUp = document.getElementById('showPopUpEdit');
    let closePopUp = document.getElementById('closePopUpEdit');

    function showPopUpTabEdit() {
        showPopUp.classList.add('gradeAddPopUpActive')
    }

    function closePopUpTabEdit() {
        showPopUp.classList.remove('gradeAddPopUpActive')
    }


    // Overlay Funtion
    let overlay = document.getElementById("overlay");

    function on() {
        overlay.classList.add("overlayActive");
    }

    function off() {
        overlay.classList.remove("overlayActive");
    }
}
// Pop-Up Show Hide Funtion For Edit
{
    let showPopUp = document.getElementById('showPopUpPreview');
    let closePopUp = document.getElementById('closePopUpPreview');

    function showPopUpTabPreview() {
        showPopUp.classList.add('gradeAddPopUpActive')
    }

    function closePopUpTabPreview() {
        showPopUp.classList.remove('gradeAddPopUpActive')
    }


    // Overlay Funtion
    let overlay = document.getElementById("overlay");

    function on() {
        overlay.classList.add("overlayActive");
    }

    function off() {
        overlay.classList.remove("overlayActive");
    }
}


// Save Funtion



function adding() {
    let saveButtonAdding = document.getElementById('adding');
    let saveingButton = document.getElementById('saveing');

    saveButtonAdding.innerText = "Adding...";
    saveingButton.innerText = "Saveing...";
}



function btnSave() {
    function added() {
        let saveButtonAdding = document.getElementById('adding');
        let saveingButton = document.getElementById('saveing');

        saveButtonAdding.innerText = "Added";
        saveingButton.innerText = "Saved";
    }

    function afterAdding() {
        let saveButtonAdding = document.getElementById('adding');
        let saveingButton = document.getElementById('saveing');

        saveButtonAdding.innerText = "Add";
        saveingButton.innerText = "Save";
    }
    setTimeout(added, 1500)
    setTimeout(afterAdding, 2000)
    setTimeout(closePopUpTab, 2000)
    setTimeout(closePopUpTabEdit, 2000)
    setTimeout(off, 2000)

}