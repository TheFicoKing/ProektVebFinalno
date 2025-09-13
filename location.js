const apartments = [
  {
    id: 1,
    title: "Apartment - 90m² - Skopje Center",
    price: "€300,000",
    coords: [41.9989, 21.4235], // Skopje Center
  },
  {
    id: 2,
    title: "Apartment - 60m² - Skopje Center",
    price: "€180,000",
    coords: [41.9965, 21.4316], // Near Macedonia Square
  },
  {
    id: 3,
    title: "Apartment - 70m² - Kisela Voda",
    price: "€200,000",
    coords: [41.9725, 21.4406], // Kisela Voda
  },
  {
    id: 4,
    title: "Apartment - 80m² - Ohrid",
    price: "€250,000",
    coords: [41.1176, 20.8015], // Ohrid Center
  },
  {
    id: 5,
    title: "Apartment - 75m² - Gjorce Petrov",
    price: "€120,000",
    coords: [42.0079, 21.3270], // Gjorce Petrov
  },
];

// Init map
const map = L.map("map").setView([41.9981, 21.4254], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Add markers with hover effect
apartments.forEach((apt) => {
  const marker = L.marker(apt.coords).addTo(map);

  // Show popup on hover (mouseover)
  marker.on("mouseover", () => {
    marker.bindPopup(`<b>${apt.title}</b><br>Price: ${apt.price}`).openPopup();
  });

  // Close popup on mouseout
  marker.on("mouseout", () => {
    marker.closePopup();
  });
});

// Add click event on cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    const apt = apartments.find((a) => a.id == id);
    if (apt) {
      map.setView(apt.coords, 14);
    }
  });
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menyBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menyBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menyBtnIcon.setAttribute("class", "ri-menu-3-line");
});