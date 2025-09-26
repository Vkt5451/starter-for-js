const menuItems = [// Add as many items as you want here

    {name: "Explore Bagels",
        description: "",
        image: "images/bagel3.jpg"
    },
    {name: "Explore Sandwiches",
        description: "",
        image: "images/bagel2.jpg"
    },
    {name: "Explore Smoothies",
        description: ".",
        image: "images/bagel4.jpg"
    },
    
];

const menuContainer = document.getElementById("menu");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

modal.style.display = "none"; // Ensure modal is hidden initially

menuItems.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("menu-item");

  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="item-info">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
  `;

  menuContainer.appendChild(div);
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
