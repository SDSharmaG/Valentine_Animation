document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.getElementById('terminal-content');
    const typingCommand = document.getElementById('typing-command');
    const terminalContainer = document.getElementById('terminal-container');
    const surpriseContainer = document.getElementById('surprise-container');
    const cursor = document.querySelector('.cursor');

    const commandText = "npm run surprise-for-kathiravan.t-sir";
    let index = 0;

    // 1. Typing Effect
    function typeCommand() {
        if (index < commandText.length) {
            typingCommand.textContent += commandText.charAt(index);
            index++;
            setTimeout(typeCommand, 100);
        } else {
            // Command finished, simulate Enter key and execution
            setTimeout(executeCommand, 500);
        }
    }

    // 2. Simulate Command Execution
    function executeCommand() {
        // Remove cursor from command line
        cursor.style.display = 'none';
        
        // Add new line with output
        addToTerminal("<br><span class='text-warning'>[init]</span> Initializing gratitude modules...");
        
        setTimeout(() => {
            addToTerminal("<span class='text-info'>[load]</span> Loading 'Best Teacher' assets...");
        }, 800);

        setTimeout(() => {
            addToTerminal("<span class='text-info'>[load]</span> Compiling memories...");
        }, 1800);

        setTimeout(() => {
            addToTerminal("<span class='text-success'>[success]</span> Build completed successfully!");
        }, 3000);

        setTimeout(() => {
            addToTerminal("<span class='text-primary'>[deploy]</span> Launching surprise...");
        }, 4000);

        setTimeout(launchSurprise, 5500);
    }

    function addToTerminal(html) {
        const newLine = document.createElement('div');
        newLine.innerHTML = html;
        terminalContent.appendChild(newLine);
        // Scroll to bottom
        const terminalBody = document.querySelector('.terminal-body');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    // 3. Launch Surprise
    function launchSurprise() {
        terminalContainer.classList.add('fade-out'); // Add CSS fade out if needed, or just hide
        terminalContainer.style.transition = 'opacity 1s ease';
        terminalContainer.style.opacity = '0';

        setTimeout(() => {
            terminalContainer.classList.add('d-none');
            surpriseContainer.classList.remove('d-none');
            // Trigger confetti
            createConfetti();
        }, 1000);
    }

    // 4. Confetti Effect (Simple CSS Implementation)
    function createConfetti() {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        const confettiContainer = document.querySelector('.confetti-container');

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random properties
            const bg = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100 + '%';
            const animDuration = Math.random() * 3 + 2 + 's';
            const animDelay = Math.random() * 2 + 's';
            
            confetti.style.background = bg;
            confetti.style.left = left;
            confetti.style.animationDuration = animDuration;
            confetti.style.animationDelay = animDelay;
            
            // CSS for confetti needs to be injected or already present
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.top = '-10px';
            confetti.style.opacity = '0.7';
            confetti.style.animationName = 'confettiFall';
            confetti.style.animationTimingFunction = 'linear';
            confetti.style.animationIterationCount = 'infinite';

            confettiContainer.appendChild(confetti);
        }
    }

    const startBtn = document.getElementById('start-btn');
    const startContainer = document.getElementById('start-container');

    // Start Button Click Event
    startBtn.addEventListener('click', () => {
        // Hide start button with fade out
        startContainer.style.transition = 'opacity 0.5s ease';
        startContainer.style.opacity = '0';
        
        setTimeout(() => {
            startContainer.classList.add('d-none');
            // Show terminal container
            terminalContainer.classList.remove('d-none');
            // Start typing effect
            typeCommand();
        }, 500);
    });

    // Start everything
    // setTimeout(typeCommand, 1000); // Removed auto-start
});

// Inject Confetti Keyframes
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes confettiFall {
    0% { transform: translateY(-10px) rotate(0deg); }
    100% { transform: translateY(100vh) rotate(720deg); }
}
`;
document.head.appendChild(styleSheet);
