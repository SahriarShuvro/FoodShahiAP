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

    closePopUp.addEventListener('click', closePopUpTab())

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

    closePopUp.addEventListener('click', closePopUpTab())

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

    closePopUp.addEventListener('click', closePopUpTab())

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

let saveButtonAdding = document.getElementById('saveButtonAdding');
let saveButtonAddingEdit = document.getElementById('saveButtonAddingEdit');

function adding() {
    saveButtonAdding.innerText = "Adding...";
    saveButtonAddingEdit.innerText = "Adding...";
}

function saveAfterAdding() {
    saveButtonAdding.innerText = "Add";
    saveButtonAddingEdit.innerText = "Add";
}

function saveAfterAdded() {
    saveButtonAdding.innerText = "Added";
    saveButtonAddingEdit.innerText = "Added";
}

function btnSave() {
    setTimeout(off, 2000)
    setTimeout(closePopUpTab, 2000)
    setTimeout(closePopUpTabEdit, 2000)
    setTimeout(saveAfterAdding, 2000)
    setTimeout(saveAfterAdded, 1500)

}