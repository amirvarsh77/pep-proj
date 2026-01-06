const forms = document.querySelectorAll(".email-signup");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop page reload

        const emailInput = form.querySelector("input[type='email']");

        if (emailInput.value.trim() === "") {
            alert("Please enter your email address");
        } else {
            alert("Thanks! This is a demo Streamflix clone project -");
            emailInput.value = "";
        }
    });
});

