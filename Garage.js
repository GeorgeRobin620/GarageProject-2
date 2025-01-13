const form = document.querySelector(".reserve-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get email value
    const email = document.getElementById("email").value;

    // Get selected items
    const checkboxes = document.getElementsByName("items");
    let selectedItems = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedItems.push(checkboxes[i].value);
        }
    }

    // Validate that at least one item is selected
    if (selectedItems.length === 0) {
        alert("Please select at least one item.");
        return;
    }

      // Create the reservation message
    const reservedItems = selectedItems.join(", ");
    const message = `Your reservation has been made!\n\nEmail: ${email}\nItems Reserved: ${reservedItems}`;

    // Show the message in a popup window
      alert(message);
});

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
