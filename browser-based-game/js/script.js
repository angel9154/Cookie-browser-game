const audio = new Audio();
audio.src = "./click-buttons-ui-menu-sounds-effects-button-8-205394.mp3";

const hoverAudio = new Audio();
hoverAudio.src = "./spooky-howling-female-tomas-herudek-2-2-00-07.mp3"; 

const hoverAudio1 = new Audio();
hoverAudio1.src = "./click-buttons-ui-menu-sounds-effects-button-6-203600.mp3";
let clickCount = 0;

function handleClick(event) {
    // Reset and play audio
    audio.currentTime = 0;
    audio.play();
    
    // Update counter
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
    
    // Create floating text
    createFloatingText(event);
}
function createFloatingText(event) {
    // Create the floating text element
    const floatingText = document.createElement('div');
    floatingText.textContent = '+1';
    floatingText.classList.add('floating-text');
    
    // Position the text at the click location
    floatingText.style.left = `${event.clientX}px`;
    floatingText.style.top = `${event.clientY}px`;
    
    // Add the text to the body
    document.body.appendChild(floatingText);
    
    // Remove the text after animation completes
    setTimeout(() => {
        document.body.removeChild(floatingText);
    }, 1000);
}



function addSoundEffects() {
    // Get all elements you want to add hover sound to
    const button1 = document.getElementById('button1');
    const counterHeading = document.querySelector('.counter-heading');
    const counterWrapper = document.querySelector('.counter-wrapper');
    const button = document.querySelector('.button');
    // Function to play hover sound
    function playHoverSound() {
        hoverAudio.currentTime = 0;
        hoverAudio.play();
    }

    function playHoverSound1() {
        hoverAudio1.currentTime = 0;
        hoverAudio1.play();
    }
    button1.addEventListener('click', handleClick);
    // Add hover sound to button
    button1.addEventListener('mouseenter', playHoverSound1);
    
    // Add hover sound to scoreboard
    counterHeading.addEventListener('mouseenter', playHoverSound1);
    
    // Add hover sound to counter
    counterWrapper.addEventListener('mouseenter', playHoverSound1);
     
    if (button) {
       button.addEventListener('mouseenter', playHoverSound);
       button.addEventListener('click', playClickSound);
    }
    // My existing click sound
    // Add click handler to cookie button
   
}
function initializeGame() {
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const startButton = document.querySelector('.button');

    // Hide content2 initially
    content2.style.display = 'none';

    // Add click event to start button
    startButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        content1.style.display = 'none';
        content2.style.display = 'block';
    });
}
// Update the DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
    addSoundEffects();
});

document.addEventListener('DOMContentLoaded', () => {
    addClickSound();
});

document.addEventListener('DOMContentLoaded', () => {
    initializeGame(); 
});