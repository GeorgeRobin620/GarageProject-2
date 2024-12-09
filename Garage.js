const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email");
    console.log(email.value);
});

function getValue() {
    let checkboxes = document.getElementsByName('items');
    let result = "";
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value + " " + " items, ";
        }
    }
    console.log("<p> You have selected : " + result);
};