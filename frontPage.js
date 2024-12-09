function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const dropdown = document.getElementById('dropdown');
    const dropdownList = document.getElementById('dropdownList');
    const options = [
        "5555 Castle Glen Ave, San Jose, CA 95129",
        "5452 Castle Glen Ave, San Jose, CA 95129",
        "5476 Castle Glen Ave, San Jose, CA 95129",
        "5548 Castle Glen Ave, San Jose, CA 95129",
        "5559 Castle Glen Ave, San Jose, CA 95129",
        "5558 Castle Glen Ave, San Jose, CA 95129",
        "5534 Castle Glen Ave, San Jose, CA 95129",
        "5574 Castle Glen Ave, San Jose, CA 95129"
    ];

    dropdownList.innerHTML = ''; // Clear previous results
    if (query) {
        const filteredOptions = options.filter(option => option.toLowerCase().includes(query));
        filteredOptions.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            li.classList.add('dropdownItem');
            li.onclick = function() {
                document.getElementById('searchInput').value = option; // Set input value
                dropdown.style.display = 'none'; // Hide dropdown
            };
            dropdownList.appendChild(li);
        });
        dropdown.style.display = 'block'; // Show dropdown
    } else {
        dropdown.style.display = 'none'; // Hide dropdown when input is empty
    }
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.searchContainer')) {
        document.getElementById('dropdown').style.display = 'none'; // Hide dropdown if clicked outside
    }
});
