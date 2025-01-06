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

// Smooth scroll to the top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

 // Show the button only when the user scrolls down
 const backToTopButton = document.querySelector('.back-to-top');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 300) {
         backToTopButton.style.display = 'block';
     } else {
         backToTopButton.style.display = 'none';
     }
 });
