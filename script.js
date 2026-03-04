function submitName() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();
    if (!name) return;

    const contentContainer = document.getElementById('content-container');
    const welcomeMsg = document.getElementById('welcome-msg');

    // Display welcome text
    welcomeMsg.innerHTML = `Welcome,<br/>${name} 🎉`;

    // Crossfade sequence to show the welcome message
    contentContainer.style.opacity = '0';

    setTimeout(() => {
        contentContainer.style.display = 'none';
        welcomeMsg.style.display = 'block';

        // Force reflow for css transition
        void welcomeMsg.offsetWidth;

        welcomeMsg.style.opacity = '1';

        // Wait a brief moment then start the party!
        setTimeout(startParty, 500);
    }, 400);
}

let flowerInterval;

function startParty() {
    // Add party mode class to body to trigger background lights and pulse effects
    document.body.classList.add('party-mode');

    // Start flower blaster (create a flower every 80ms)
    flowerInterval = setInterval(createFlower, 80);
}

function createFlower() {
    const flowerContainer = document.getElementById('flower-container');
    const flower = document.createElement('div');

    flower.classList.add('flower');

    // Array of flower emojis and confetti symbols
    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌹', '🌷', '🏵️', '💐', '✨', '🎊'];
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    // Random position across the width
    flower.style.left = Math.random() * 100 + 'vw';

    // Random size between 15px and 45px
    const size = Math.random() * 30 + 15;
    flower.style.fontSize = size + 'px';

    // Random animation duration between 2s and 5s
    const duration = Math.random() * 3 + 2;
    flower.style.animationDuration = duration + 's';

    // Add horizontal drifting right/left
    const drift = (Math.random() - 0.5) * 200;
    flower.style.setProperty('--drift', drift + 'px');

    // Apply animation configuration
    flower.style.animationName = 'fallAndDrift';
    flower.style.animationTimingFunction = 'linear';
    flower.style.animationFillMode = 'forwards';

    flowerContainer.appendChild(flower);

    // Remove flower after it completes its animation to save memory
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}
