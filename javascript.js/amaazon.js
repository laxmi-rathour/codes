function showInfo() {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);

    let message = "";

    if (name === "") {
        message = "Please enter your name.";
    }

    else if (age <= 0) {
        message = "Please enter a valid age.";
    }

    else {

        if (age < 18) {
            message =
                "Hello " + name +
                "!<br>You are " + age +
                " years old.<br>You are a Minor.";
        }

        else {

            message =
                "Hello " + name +
                "!<br>You are " + age +
                " years old.<br>You are an Adult.";
        }

    }

    document.getElementById("result").innerHTML = message;

}

let randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

function guessNumber() {

    let guess = document.getElementById("guess").value;

    guess = Number(guess);

    attempts++;

    if (guess < 1 || guess > 10) {

        document.getElementById("result").textContent =
            "Please enter a number between 1 and 10.";

    }

    else if (guess === randomNumber) {

        document.getElementById("result").textContent =
            "Congratulations! You guessed it in " + attempts + " attempts.";

    }

    else if (guess < randomNumber) {

        document.getElementById("result").textContent =
            "Too Low! Try Again.";

    }

    else {

        document.getElementById("result").textContent =
            "Too High! Try Again.";

    }

}  

let randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

function guessNumber() {

    let guess = document.getElementById("guess").value;

    guess = Number(guess);

    attempts++;

    if (guess < 1 || guess > 10) {

        document.getElementById("result").textContent =
            "Please enter a number between 1 and 10.";

    }

    else if (guess === randomNumber) {

        document.getElementById("result").textContent =
            "Congratulations! You guessed it in " + attempts + " attempts.";

    }

    else if (guess < randomNumber) {

        document.getElementById("result").textContent =
            "Too Low! Try Again.";

    }

    else {

        document.getElementById("result").textContent =
            "Too High! Try Again.";

    }

}
