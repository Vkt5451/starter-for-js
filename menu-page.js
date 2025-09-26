const menuItems = [
  { category: "Most Popular", name: "Turkey & Ham Avacado Sandwich", description: "", image: "images/bagel2.jpg", 
   /* addons: {
  Rolls: ["Parmesian", "Cheddar", "Whole wheat" , "plain", "Parmesian Jalpeno" ],
  Veggies: ["Lettuce", "Tomato", "Avocado"],
  Drinks: ["Coke", "Water", "Smoothie"],
  new: ["Cheese", "Bacon", "Egg"]} */
},
  { category: "Most Popular", name: "item", description: "", image: "images/bagel2.jpg" },
  { category: "Most Popular", name: "item", description: "", image: "images/bagel2.jpg" },
  { category: "Most Popular", name: "item", description: "", image: "images/bagel2.jpg" },
  { category: "Most Popular", name: "item", description: "", image: "images/bagel2.jpg" },
  { category: "Most Popular", name: "item", description: "", image: "images/bagel2.jpg" },
  { category: "Most Popular", name: "item", description: "", image: "images/bagel2.jpg" },
    { category: "Sandwiches", name: "item", description: "", image: "images/bagel2.jpg" },
    { category: "Sandwiches", name: "item", description: "", image: "images/bagel2.jpg" },
    { category: "Sandwiches", name: "item", description: "", image: "images/bagel2.jpg" },
    { category: "Sandwiches", name: "item", description: "", image: "images/bagel2.jpg" },
    { category: "Sandwiches", name: "item", description: "", image: "images/bagel2.jpg" },
    { category: "Sandwiches", name: "item", description: "", image: "images/bagel2.jpg" },
      { category: "Bagels", name: "Bagel", description: "", image: "images/bagel3.jpg" },
      { category: "Bagels", name: "Bagel", description: "", image: "images/bagel3.jpg" },
      { category: "Bagels", name: "Bagel", description: "", image: "images/bagel3.jpg" },
      { category: "Bagels", name: "Bagel", description: "", image: "images/bagel3.jpg" },
      { category: "Bagels", name: "Bagel", description: "", image: "images/bagel3.jpg" },
      { category: "Bagels", name: "Bagel", description: "", image: "images/bagel3.jpg" },
        { category: "Savory Snacks", name: "bagel dog", description: "", image: "images/bagel4.jpg" },
        { category: "Savory Snacks", name: "pizza bagel", description: "", image: "images/bagel4.jpg" },
          { category: "Sweets", name: "pizza bagel", description: "", image: "images/bagel4.jpg" },
          { category: "Sweets", name: "pizza bagel", description: "", image: "images/bagel4.jpg" },
            { category: "Smoothies", name: "Smoothie", description: "", image: "images/bagel4.jpg" },
            { category: "Smoothies", name: "Smoothie", description: "", image: "images/bagel4.jpg" },
            { category: "Smoothies", name: "Smoothie", description: "", image: "images/bagel4.jpg" },
              { category: "Coffee", name: "Smoothie", description: "", image: "images/bagel4.jpg" },
              { category: "Coffee", name: "Smoothie", description: "", image: "images/bagel4.jpg" },
              { category: "Coffee", name: "Smoothie", description: "", image: "images/bagel4.jpg" },
                { category: "Tea", name: "Tea", description: "", image: "images/bagel4.jpg" },
                { category: "Tea", name: "Tea", description: "", image: "images/bagel4.jpg" },
                  { category: "Others", name: "Smoothie", description: "", image: "images/bagel4.jpg" },
                  { category: "Others", name: "Smoothie", description: "", image: "images/bagel4.jpg" },


];

// DOM elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");
const modalAddons = document.getElementById("modal-addons");
let currentSelectedItem = null; // For tracking current item
const cart = []; // Your shopping cart array

// Hide modal initially
modal.style.display = "none";

// Group items by category
const groupedItems = {};
menuItems.forEach(item => {
  if (!groupedItems[item.category]) {
    groupedItems[item.category] = [];
  }
  groupedItems[item.category].push(item);
});

// Render grouped items
const main = document.querySelector("main");

Object.entries(groupedItems).forEach(([category, items]) => {
  
  const group = document.createElement("div");
  group.classList.add("menu-group");

  const title = document.createElement("h2");
  title.classList.add("menu-group-title");
  title.textContent = category;
  title.id = category.replace(/\s+/g, '-'); // e.g. "Most Popular" → "Most-Popular"
  
  group.appendChild(title);

  const container = document.createElement("div");
  container.classList.add("menu-container");

  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-item");

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `;

    // Click to open modal
div.addEventListener("click", () => {
  currentSelectedItem = item;
  modalImage.src = item.image;
  modalTitle.textContent = item.name;
  modalDescription.innerHTML = item.description
    ? item.description
    : "<em>Please call to order (916-929-7800)</em>";


  modalAddons.innerHTML = ""; // Clear previous content

  if (item.addons && typeof item.addons === 'object') {
    for (const [category, options] of Object.entries(item.addons)) {
      const categoryHeader = document.createElement("h4");
      categoryHeader.textContent = category;
      categoryHeader.classList.add("addon-category-title");
      modalAddons.appendChild(categoryHeader);

      options.forEach(option => {
        const label = document.createElement("label");
        label.classList.add("addon-item");

        const input = document.createElement("input");

        // ✅ Only one required category: 'Drinks' (change as needed)
        if (category === "Rolls") {
          input.type = "radio";
          input.name = `addon-${category}`; // group radios
          input.required = true; // ✅ make it required
        } else {
          input.type = "checkbox";
          input.name = `addon-${category}`; // optional groups
        }

        input.value = option;

        const span = document.createElement("span");
        span.textContent = option;

        label.appendChild(input);
        label.appendChild(span);
        modalAddons.appendChild(label);
      });
    }
  }

  modal.style.display = "flex";
});


    container.appendChild(div);
  });

  group.appendChild(container);
  main.appendChild(group);

    //Click to close modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

/*
  const addToCartBtn = document.getElementById("add-to-cart-btn");

  addToCartBtn.addEventListener("click", () => {
    if (!currentSelectedItem) return;

    // Collect selected addons
    const selectedAddons = {};
    const inputs = modalAddons.querySelectorAll("input");

    inputs.forEach(input => {
      const category = input.name.replace("addon-", "");

      if (input.checked) {
        if (!selectedAddons[category]) {
          selectedAddons[category] = [];
        }
        selectedAddons[category].push(input.value);
      }
    });

    // Build cart item object
    const cartItem = {
      name: currentSelectedItem.name,
      image: currentSelectedItem.image,
      addons: selectedAddons
    };

    cart.push(cartItem); // Add to cart
    updateCartCount();

    
    console.log("🛒 CART:", cart); // You can replace with actual UI rendering

    modal.style.display = "none"; // Optionally close modal
  });

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}
*/