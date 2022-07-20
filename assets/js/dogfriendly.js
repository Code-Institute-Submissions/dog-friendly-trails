function myFunction() {
    if (validateForm(fname, 'First Name')=false) {
        return false;
    }
    if (validateForm(lname, 'Last Name')=false) {
        return false;
    }
    if (validateForm(email, 'eMail') = false) {
        return false;
    }
    document.getElementById("submitit").submit();
}

function validateForm(formitem, strField) {
    let x = formitem.value;
    if (x == "") {
        return false;
    }
}