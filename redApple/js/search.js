// ========================= SEARCH MODAL =========================

// Elements
const searchModal     = document.getElementById("searchModal");
const searchOpenBtn   = document.getElementById("searchOpenBtn");
const searchCloseBtn  = document.getElementById("searchCloseBtn");
const searchOverlay   = document.getElementById("searchOverlay");
const searchInput     = document.getElementById("searchInput");
const searchResults   = document.getElementById("searchResults");
const popularButtons  = document.querySelectorAll(".popular-btn");

// Search Data
const searchData = [
    { title: "Term Insurance", description: "Learn about term insurance plans." },
    { title: "Investment Plans", description: "Explore investment and savings plans." },
    { title: "Calculators", description: "Calculate premium and other benefits." },
    { title: "Customer Service", description: "Get help and customer support." },
    { title: "Certificate", description: "Download your insurance certificate." },
    { title: "Premium", description: "Pay and manage your premium." },
    { title: "Claims", description: "Register and track your claim." },
    { title: "Jobs", description: "Explore available job opportunities." },
    { title: "Development", description: "Explore development programs." },
    { title: "Workshops", description: "Explore available workshops." }
];


// ========================= OPEN MODAL =========================
searchOpenBtn.addEventListener("click", () => {
    searchModal.classList.add("active");
    searchInput.focus();
});


// ========================= CLOSE MODAL =========================
function closeSearchModal() {
    searchModal.classList.remove("active");
    searchInput.value = "";
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
}

searchCloseBtn.addEventListener("click", closeSearchModal);
searchOverlay.addEventListener("click", closeSearchModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSearchModal();
});


// ========================= SEARCH FUNCTION =========================
searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (!text) {
        searchResults.classList.remove("show");
        return;
    }

    const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(text)
    );

    if (filtered.length === 0) {
        searchResults.innerHTML = `
            <div class="search-result-item">
                No results found.
            </div>
        `;
        searchResults.classList.add("show");
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("search-result-item");

        div.innerHTML = `
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-description">${item.description}</div>
        `;

        searchResults.appendChild(div);
    });

    searchResults.classList.add("show");
});



// ========================= POPULAR SEARCH BUTTONS =========================
popularButtons.forEach(button => {
    button.addEventListener("click", () => {
        searchInput.value = button.dataset.search;
        searchInput.focus();
        searchInput.dispatchEvent(new Event("input"));
    });
});
