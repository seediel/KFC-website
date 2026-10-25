
    var items = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
var lightbox = document.getElementById("lightbox");
var lbImg = document.getElementById("lb-img");
var lbCaption = document.getElementById("lb-caption");
var lbCount = document.getElementById("lb-count");
var currentIndex = 0;

function showImage(index) {
  currentIndex = (index + items.length) % items.length;
  var img = items[currentIndex].querySelector("img");
  var cap = items[currentIndex].querySelector(".gallery-caption");
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCaption.textContent = cap ? cap.textContent : img.alt;
  lbCount.textContent = (currentIndex + 1) + " / " + items.length;
}

function openLightbox(index) {
  showImage(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

items.forEach(function (item, i) {
  item.addEventListener("click", function () {
    openLightbox(i);
  });
});

document.getElementById("lb-close").addEventListener("click", closeLightbox);
document.getElementById("lb-prev").addEventListener("click", function () {
  showImage(currentIndex - 1);
});
document.getElementById("lb-next").addEventListener("click", function () {
  showImage(currentIndex + 1);
});

lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", function (e) {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showImage(currentIndex - 1);
  if (e.key === "ArrowRight") showImage(currentIndex + 1);
});