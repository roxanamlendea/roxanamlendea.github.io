function showHome() {
  var page = document.getElementById("home");
  page.style.display = "block";
  hideSkills();
  hideKnownLanguages();
}

function showSkills() {
  var page = document.getElementById("skills");
  page.style.display = "block";
  hideHome();
  hideKnownLanguages();
}

function showKnownLanguages() {
  var page = document.getElementById("languages");
  page.style.display = "block";
  hideHome();
  hideSkills();
}

function hideHome() {
  var page = document.getElementById("home");
  page.style.display = "none";
}

function hideSkills() {
  var page = document.getElementById("skills");
  page.style.display = "none";
}

function hideKnownLanguages() {
  var page = document.getElementById("languages");
  page.style.display = "none";
}

showHome();
