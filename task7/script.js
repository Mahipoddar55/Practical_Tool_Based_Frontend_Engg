function changeText() {
    const headingElement = document.getElementById("title");
    const buttonElement = document.getElementById("change-btn");

    if (headingElement) {
        // Change text
        headingElement.innerHTML = "After Click";

        // Change styling
        headingElement.classList.remove("border-red-300", "text-red-600", "bg-red-50");
        headingElement.classList.add("border-green-300", "text-green-700", "bg-green-50");

        // Disable button
        if (buttonElement) {
            buttonElement.disabled = true;
            buttonElement.classList.add("opacity-60", "cursor-not-allowed");
            buttonElement.classList.remove("hover:shadow-xl");
            buttonElement.innerHTML = "Done!";
        }
    } else {
        console.error("The element with ID 'title' was not found.");
    }
}
