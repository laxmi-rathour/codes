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
