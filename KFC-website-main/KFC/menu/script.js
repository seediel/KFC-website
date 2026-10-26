const categories = document.querySelectorAll(".menu-category");
const sections = Array.from(categories)

.map(category =>
    document.getElementById(category.dataset.target)
)
.filter(Boolean);

function updateActiveCategory() {
    const offset = 200;
    let activeSection = sections[0];

    for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
            activeSection = section;
        } else {
            break;
        }
    }

    categories.forEach(category => {
        category.classList.remove("active");
    });

    const activeCategory = Array.from(categories).find(
        category => category.dataset.target === activeSection?.id
    );

    if (activeCategory) {
        activeCategory.classList.add("active");
    }
}

window.addEventListener("scroll", updateActiveCategory, {
    passive: true
});

window.addEventListener("load", updateActiveCategory);
window.addEventListener("resize", updateActiveCategory);

updateActiveCategory();

document.addEventListener("DOMContentLoaded", () => {
    // Get Modal Elements
    const modal = document.getElementById("product-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalPrice = document.getElementById("modal-price");
    const modalAddBtn = document.getElementById("modal-add-btn");

    // Get all menu tiles
    const menuTiles = document.querySelectorAll(".menu-tile");

    menuTiles.forEach((tile) => {
        tile.style.cursor = "pointer"; // Ensures mouse cursor indicates clickability

        tile.addEventListener("click", () => {
            // Extract item details from the clicked tile
            const imgSrc = tile.querySelector(".food-images")?.src || "";
            const itemName = tile.querySelector(".item-name")?.textContent || "Item";
            const itemPrice = tile.querySelector(".price")?.textContent || "₱0.00";

            // Populate Modal Content
            modalImg.src = imgSrc;
            modalImg.alt = itemName;
            modalTitle.textContent = itemName;
            modalPrice.textContent = itemPrice;
            modalDesc.textContent = `Enjoy our freshly prepared ${itemName}. Made with quality ingredients for that signature taste!`;

            // Display Modal
            modal.style.display = "flex";
        });
    });

    modalCloseBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
});

