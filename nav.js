// Navigation configuration data
const navConfig = {
  primary: [
    { name: "Home", link: "index.html" },
    { name: "About Me", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" }
  ],
  secondary: [] // Empty if you don't need secondary links
};

// Function to render Top Header Navigation
function renderTopNav() {
  const container = document.getElementById("top-nav-container");
  if (!container) return;

  const topNavHTML = `
    <nav class="top-nav">
      <ul>
        ${navConfig.primary.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join("")}
      </ul>
      ${navConfig.secondary.length > 0 ? `
        <ul class="secondary-nav">
          ${navConfig.secondary.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join("")}
        </ul>
      ` : ''}
    </nav>
  `;
  
  container.innerHTML = topNavHTML;
}

// Function to render Left Sidebar Navigation
function renderSidebarNav() {
  const container = document.getElementById("sidebar-nav-container");
  if (!container) return;

  const sidebarNavHTML = `
    <nav>
      <div class="nav-title">Menu</div>
      <ul>
        ${navConfig.primary.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join("")}
      </ul>
    </nav>
  `;

  container.innerHTML = sidebarNavHTML;
}

// Automatically populate links on load
document.addEventListener("DOMContentLoaded", () => {
  renderTopNav();
  renderSidebarNav();

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
