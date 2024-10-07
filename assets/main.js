

function addInputListeners() {

    document.getElementById("fname").addEventListener("input", function () {
    let firstName = document.getElementById("fname").value.trim();
    if (firstName !== "") {
        document.getElementsByClassName("error")[0].classList.add("d-none");
    }
    });


    document.getElementById("sname").addEventListener("input", function () {
    let secName = document.getElementById("sname").value.trim();
    if (secName !== "") {
        document.getElementsByClassName("error")[1].classList.add("d-none");
    }
    });


    document.getElementById("mail").addEventListener("input", function () {
    let email = document.getElementById("mail").value.trim();
    if (email !== "") {
        document.getElementsByClassName("error")[2].classList.add("d-none");
    }
    });

    document.getElementById("message").addEventListener("input", function () {
    let message = document.getElementById("message").value.trim();
    if (message !== "") {
        document.getElementsByClassName("error")[4].classList.add("d-none");
    }
    });

    document.querySelectorAll('input[name="radio"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
        document.getElementsByClassName("error")[3].classList.add("d-none");
    });
    });


    document.querySelector('input[type="checkbox"]').addEventListener("change", function () {
    if (this.checked) {
        document.getElementsByClassName("error")[5].classList.add("d-none");
    }
    });
}


    window.onload = function() {
    addInputListeners();
}

    function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


function check() {
    let firstName = document.getElementById("fname").value;
    let secName = document.getElementById("sname").value;
    let email = document.getElementById("mail").value;
    let message = document.getElementById("message").value;
    let queryType = document.querySelector('input[name="radio"]:checked');
    let consent = document.querySelector('input[type="checkbox"]').checked;

    let firstName_1 = document.getElementById("fname");
    let secName_1 = document.getElementById("sname");
    let email_1 = document.getElementById("mail");

    let form = document.querySelector("form");
    let divForm = document.querySelector(".form");

    let error = document.getElementsByClassName("error");

    let alert = document.querySelector(".alert");

    let hasErrors = false;

    if (firstName === "" || firstName.length < 2) {
        error[0].classList.remove("d-none");
        error[0].classList.add("d-block");
        firstName_1.classList.add("is-invalid");
        hasErrors = true;
    }

    if (secName === "" || secName.length < 2) {
        error[1].classList.remove("d-none");
        error[1].classList.add("d-block");
        secName_1.classList.add("is-invalid");
        hasErrors = true;
    }

    if (email === "") {
        error[2].classList.remove("d-none");
        error[2].classList.add("d-block");
        email_1.classList.add("is-invalid");
    } else if (!validateEmail(email)) {
        error[2].classList.remove("d-none");
        error[2].textContent = "Please enter a valid email address";
        email_1.classList.add("is-invalid");
    }

    if (message === "") {
        error[4].classList.remove("d-none");
        error[4].classList.add("d-block");
        hasErrors = true;
    }

    if (!queryType) {
        error[3].classList.remove("d-none");
        error[3].classList.add("d-block");
        hasErrors = true;
    }

    if (!consent) {
        error[5].classList.remove("d-none");
        error[5].classList.add("d-block");
        hasErrors = true;
    }

    if (!hasErrors) {
        form.classList.add("mt-0");
        divForm.classList.add("mt-0");
        alert.classList.remove("d-none");
        alert.classList.add("d-block");

        setTimeout(function () {
            alert.classList.remove("d-block");
            alert.classList.add("d-none");
        }, 3000);
    }
}


document.getElementById("toggle-dark-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
