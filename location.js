var searchInput = document.getElementById("search");
var cards = document.querySelectorAll(".location-card");
var noResults = document.getElementById("no-results");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    var query = this.value.toLowerCase().trim();
    var visibleCount = 0;

    cards.forEach(function (card) {
      var text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (visibleCount === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });
}
