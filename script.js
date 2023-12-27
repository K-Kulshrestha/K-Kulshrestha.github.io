// Array of loading messages
const loadingMessages = [
    "Kshitij is eagerly preparing his masterpiece!",
    "Just a moment, Kshitij can't wait for you to explore his website!",
    "Almost there! Kshitij is adding the final touches.",
];

// Function to get a random loading message
function getRandomLoadingMessage() {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    return loadingMessages[randomIndex];
}

// Function to update loading text
function updateLoadingText() {
    const loadingTextElement = document.getElementById('loading-text');
    if (loadingTextElement) {
        loadingTextElement.textContent = getRandomLoadingMessage();
    }
}

// Simulate loading delay for demonstration purposes
setTimeout(function () {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('enter-website').style.display = 'block';
    document.body.style.overflow = 'auto'; // Restore scroll bars
}, 2000); // Adjust the delay as needed

// Update loading text periodically
setInterval(updateLoadingText, 400);
