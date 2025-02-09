function updateUTCTime() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    timeElement.textContent = now.toUTCString();
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);