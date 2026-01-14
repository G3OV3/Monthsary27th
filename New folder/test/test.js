function goYes() {
  showPage("yesPage");
}

function goNo() {
  showPage("noPage");
}

function goBack() {
  showPage("page1");
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

// Set your target date here
const targetDate = new Date("2026-01-20T00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.getElementById("timer").innerHTML = "Time's up!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update every second
setInterval(updateTimer, 1000);
updateTimer();

