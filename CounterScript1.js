// Get DOM elements
const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

let count = 0;

// Update count display
function updateCount() {
    countDisplay.textContent = count;
}

// Increase count
increaseButton.addEventListener("click", () => {
    count++;
    updateCount();
});

// Decrease count
decreaseButton.addEventListener("click", () => {
    count--;
    updateCount();
});

// Reset count
resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
});
