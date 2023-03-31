const button = document.getElementById("button");

function sendInfo() {
    const info = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };

    if (document.getElementById("checkbox").checked != true) {
        throw new Error("Error");
    }

    fetch("/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
    });
}

button.addEventListener("click", sendInfo);
