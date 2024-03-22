const usernameEl = document.forms.formValidate.username;
const nameEl = document.forms.formValidate.name;
const surnameEl = document.forms.formValidate.surname;
const birthdayEl = document.forms.formValidate.birthday;
const emailEl = document.forms.formValidate.email;
const passwordEl = document.forms.formValidate.password;
const password2El = document.forms.formValidate.password2;


const form = document.querySelector("#signup");

// Création de constante accueillant une fonction de verification par input
const checkUsername = () => {
    let valid = false;

    const min = 3, // min max caratéres
        max = 25;

    const username = usernameEl.value.trim(); // trim élimine les espaces dans une chaine de caractéres

    if (!isRequired(username)) {
        showError(usernameEl, "Le nom d'utilisateur ne peut pas être vide");
    } else if (username === "afpa"  || username === "root"  || username === "deus") {
        showError(
            usernameEl,
            `Le nom ${username} ne peut pas etre utiliser.`
        );
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};
// Création de constante accueillant une fonction de verification pour chaque input
const checkName = () => {
    let valid = false;

    const min = 3, // min max caratéres
        max = 15;

    const name = nameEl.value.trim(); // trim élimine les espaces dans une chaine de caractéres

    if (!isRequired(name)) {
        showError(nameEl, "Le nom d'utilisateur ne peut pas être vide");
    } else if (!isBetween(name.length, min, max)) {
        showError(
            nameEl,
            `Le nom d'utilisateur doit avoir entre ${min} et ${max} caractères.`
        );
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};
// Création de constante accueillant une fonction de verification pour chaque input
const checkSurname = () => {
    let valid = false;

    const min = 3, // min max caratéres
        max = 15;

    const surname = surnameEl.value.trim(); // trim élimine les espaces dans une chaine de caractéres

    if (!isRequired(surname)) {
        showError(surnameEl, "Le nom d'utilisateur ne peut pas être vide");
    } else if (!isBetween(surname.length, min, max)) {
        showError(
            surnameEl,
            `Le nom d'utilisateur doit avoir entre ${min} et ${max} caractères.`
        );
    } else {
        showSuccess(surnameEl);
        valid = true;
    }
    return valid;
};
// Création de constante accueillant une fonction de verification pour chaque input
const checkBirthday = () => {
    let valid = false;


    const birthday = birthdayEl.value.trim();

    if (!isRequired(birthday)) {
        showError(birthdayEl, "Date de Naissance ne peut pas être vide");
    } else {
        showSuccess(birthdayEl);
        valid = true;
    }
    return valid;
};

// Création de constante accueillant une fonction de verification pour chaque input
const checkEmail = () => {    
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, "l'email ne peut etre vide");
    } 
    else if (!isEmailValid(email) || (email === "root@afpa.fr"  || email === "afpa@afpa.com"  || email === "deus@afpa.org")) {
        showError(emailEl, `Ce mail ${email} ne peut pas etre utiliser.`);
    } 
    else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // utilisation d'une regex pour comparer le format type mail
    return re.test(email); // La méthode native test() teste une correspondance dans une chaîne
};
// Création de constante accueillant une fonction de verification pour chaque input
const checkPassword = () => {
    let valid = false;

    
    const password = passwordEl.value.trim();

    if (!isRequired(password) ) {
        showError(passwordEl, "Le  ne peut pas être vide");

    }
    else if (!ispasswordSecure(password)){
        showError(passwordEl, "mot de passe non correspondant");   
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};
const ispasswordSecure = (password) => {
    const re2 =  new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&])(?=.{8,})"); // utilisation d'une regex pour comparer le format type mot de passe.

    // const re2 = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&])(?=.{8,})/;
    return re2.test(password); // La méthode native test() teste une correspondance dans une chaîne
};
// Création de constante accueillant une fonction de verification pour chaque input
const checkPassword2 = () => {
    let valid = false;


    const password2 = password2El.value.trim();

    if (!isRequired(password2)) {
        showError(password2El, "mot de passe ne correspond pas");
    } else {
        showSuccess(password2El);
        valid = true;
    }
    return valid;
};





const isRequired = (value) => (value === "" ? false : true); // Si la value retourne une chaine de caractére vide alors isRequired = false

const isBetween = (length, min, max) =>
    length < min || length > max ? false : true; // si length est plus petit que min ou length est plus grand que max alors isBetween = false

const showError = (input, message) => {
    // Récupération de l'élément parent de formulaire
    const formField = input.parentElement;
    // ajout de la classe error
    formField.classList.remove("success");
    formField.classList.add("error");

    // voir le message d'erreur dans la balise small
    const error = formField.querySelector("small");
    error.textContent = message;
};

const showSuccess = (input) => {
    // Récupération de l'élément parent de formulaire
    const formField = input.parentElement;

    // supprimer la classe error
    formField.classList.remove("error");
    formField.classList.add("success");

    // cacher le message d'erreur dans la balise small
    const error = formField.querySelector("small");
    error.textContent = "";
};

form.addEventListener("submit", function (e) {
    // empécher l'envois du formulaire
    e.preventDefault();

    // validation des champs
    let isUsernameValid = checkUsername(),
        isNameValid = checkName(),
        isSurnameValid = checkSurname(),
        isbirthdayValid = checkBirthday(),
        isEmailValid = checkEmail(),
        ispasswordValid = checkPassword(),
        ispassword2Valid = checkPassword2();

    let isFormValid =
        isUsernameValid &&
        isNameValid &&
        isSurnameValid && 
        isbirthdayValid &&
        isEmailValid &&
        ispasswordValid &&
        ispassword2Valid;
        

    // soumettre le formulaire si tout est valide
    if (isFormValid) {
        console.log('Good Boy ;)');
        alert('GooD Game !!!');
    }
});
