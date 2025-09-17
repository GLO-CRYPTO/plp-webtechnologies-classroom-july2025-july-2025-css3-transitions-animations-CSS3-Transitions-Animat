
/* === Part 2: Functions & Scope === */

// Global variable
let globalCounter = 0;

// Function with parameters + return value
function multiplyValues(a, b) {
  return a * b; // return product
}

// Demonstrating local vs global scope
function incrementCounter() {
  let localValue = 1; // local scope
  globalCounter += localValue;
  return globalCounter;
}

// Reusable function to toggle animation
function toggleAnimation(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
}

/* === Part 3: Combining CSS & JS === */
document.getElementById("triggerBtn").addEventListener("click", () => {
  toggleAnimation("animatedBox", "animate");
  console.log("Counter is now:", incrementCounter());
  console.log("Multiply test:", multiplyValues(3, 4));
});

// Modal functionality
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.onclick = () => { modal.style.display = "block"; };
closeModal.onclick = () => { modal.style.display = "none"; };
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
