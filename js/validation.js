/**
 * Shows the error message of an ID
 * @param {*} id ID where message is displayed
 */
function showMessage(id) {
    document.getElementById(''+id+'Help').style.visibility='visible';
}

/**
 * Hides the error message of an ID
 * @param {*} id ID where message is hidded
 */
function hideMessage(id) {
    document.getElementById(''+id+'Help').style.visibility='hidden';
}

/**
 * Validates username
 * @returns TRUE: Username is valid | FALSE: Username is not valid
 */
function usernameValidation() {
    const usernamePattern = /^[A-Za-z\d]{8,12}$/;
    let username = document.getElementById('username').value;

    if (!usernamePattern.test(username)) {
        showMessage('username');
        return false;
    } else {
        hideMessage('username');
        return true;
    }
}

/**
 * Validates password
 * @returns TRUE: Password is valid | FALSE: Password is not valid
 */
function passwordValidation() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    let password = document.getElementById('password').value;

    if (!passwordPattern.test(password)) {
        showMessage('password');
        return false;
    } else {
        hideMessage('password');
        return true;
    }
}

/**
 * Validates first name
 * @returns TRUE: First name is valid | FALSE: First name is not valid
 */
function firstNameValidation() {
    const firstNamePattern = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/;
    let fistName = document.getElementById('firstName').value;

    if (fistName == '' || !firstNamePattern.test(fistName)) {
        showMessage('firstName');
        return false;
    } else {
        hideMessage('firstName');
        return true;
    }
}

/**
 * Validates last name
 * @returns TRUE: Last name is valid | FALSE: Last name is not valid
 */
function lastNameValidation() {
    const lastNamePattern = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/;
    let lastName = document.getElementById('lastName').value;

    if (lastName == '' || !lastNamePattern.test(lastName)) {
        showMessage('lastName');
        return false;
    } else {
        hideMessage('lastName');
        return true;
    }
}

/**
 * Validates email
 * @returns TRUE: Email is valid | FALSE: Email is not valid
 */
function emailValidation() {
    const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = document.getElementById('email').value;

    if (email == '' || !emailPattern.test(email)) {
        showMessage('email');
        return false;
    } else {
        hideMessage('email');
        return true;
    }
}

/**
 * Validates phone number
 * @returns TRUE: Phone length is 9 digits | FALSE: Phone length is not 9 digits
 */
function phoneValidation() {
    const phonePattern = /^[\d]{9}$/;
    let phone = document.getElementById('phone').value;

    if (phone == '' || !phonePattern.test(phone)) {
        showMessage('phone');
        return false;
    } else {
        hideMessage('phone');
        return true;
    }
}

/**
 * Validates provincia
 * @returns TRUE: Provincia is checked | FALSE: Provincia is not checked
 */
function provinciaValidation() {
    let provincia = document.getElementById('provincia').value;

    if (provincia == 0) {
        showMessage('provincia');
        return false;
    } else {
        hideMessage('provincia');
        return true;
    }
}



/**
 * Validates gender
 * @returns TRUE: Gender is checked | FALSE: Gender is not checked
 */
function sexoValidation() {
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;

    if (!male && !female) {
        showMessage('sexo');
        return false;
    } else {
        hideMessage('sexo');
        return true;
    }
}

/**
 * Validates terms
 * @returns TRUE: Terms is checked | FALSE: Terms is not checked
 */
function termValidation() {
    let terms = document.getElementById('term');

    if (!terms.checked) {
        showMessage('term');
        return false;
    } else {
        hideMessage('term');
        return true;
    }
}

/**
 * Validates form login.html
 * @returns TRUE: Form is correct | FALSE: Form is not correct
 */
function loginValidation() {
    let isValid = false;

    let test1 = usernameValidation();
    let test2 = passwordValidation();

    if (test1 && test2)
        isValid = true;

    return isValid;
}

/**
 * Validates forms insercion.html and modificacion.html
 * @returns TRUE: Form is correct | FALSE: Form is not correct
 */
function formValidation() {
    let isValid = false;

    let test1 = firstNameValidation();
    let test2 = lastNameValidation();
    let test3 = emailValidation();
    let test4 = phoneValidation();
    let test5 = provinciaValidation();
    let test7 = sexoValidation();
    let test8 = termValidation();

    if (test1 && test2 && test3 && test4 && test5)
        isValid = true;

    return isValid;
}

/**
 * Deletes a teacher from listado.html
 */
function deleteTeacher() {
    confirm('Are you sure you want to delete this teacher?');
}