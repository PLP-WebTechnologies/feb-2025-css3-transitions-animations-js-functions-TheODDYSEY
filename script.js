// Function to store user preferences in localStorage
function saveUserPreference(key, value) {
  localStorage.setItem(key, value);
  console.log(`Saved ${key}: ${value}`);
}

// Function to retrieve user preferences from localStorage
function getUserPreference(key) {
  return localStorage.getItem(key);
}

// Function to trigger an animation on a button click
function triggerAnimation() {
  const button = document.querySelector('button');
  button.classList.add('animate');

  // Trigger confetti effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Remove the animation class after it completes
  setTimeout(() => {
    button.classList.remove('animate');
  }, 1000);
}

// Event listener for button click
document.querySelector('button').addEventListener('click', () => {
  saveUserPreference('buttonClicked', 'true');
  triggerAnimation();
});

// On page load, check if the button was clicked before
window.onload = () => {
  const buttonClicked = getUserPreference('buttonClicked');
  if (buttonClicked === 'true') {
    console.log('Welcome back! You clicked the button before.');
  }
};