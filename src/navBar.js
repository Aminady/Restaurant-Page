export default function navBar() {
  const navContainer = document.createElement("div");
  navContainer.classList = "nav-container";
  content.appendChild(navContainer);
  navContainer.innerHTML = `
  <h1>HUNTER GOURMET</h1>
  <div class="boutons">
  <button id="home-btn" class="btn">Home</button>
  <button id="menu-btn" class="btn">Menu</button>
  <button id="contact-btn" class="btn">Contact</button>
  </div>
`;
}
