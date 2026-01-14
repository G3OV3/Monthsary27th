function goClick() {
  showPage("showPage");
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

const startDate = new Date(2023, 9, 15, 0, 0, 0); // October 15, 2023

function updateTimer() {
    const now = new Date();
    const diffTime = now - startDate; // difference in milliseconds

    // Total seconds
    const totalSeconds = Math.floor(diffTime / 1000);

    // Days, hours, minutes, seconds
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Update HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Update every second
setInterval(updateTimer, 1000);

// Initialize immediately
updateTimer();

