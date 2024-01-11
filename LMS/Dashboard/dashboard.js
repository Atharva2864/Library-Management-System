function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

// Click outside to close the dropdown
window.onclick = function(event) {
    if (!event.target.matches('.profile-circle')) {
        var dropdownMenu = document.getElementById("dropdownMenu");
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        }
    }
}

function addClickAnimation(event) {
    const element = event.currentTarget;
    element.classList.add('subject-button-clicked');

    // Remove the class after the animation completes
    setTimeout(() => {
        element.classList.remove('subject-button-clicked');
    }, 200); // 200ms = duration of the animation
}

function applyAdvancedAnimation(element) {
    element.classList.add('advanced-animation');
}

