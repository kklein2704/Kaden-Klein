// Navigation configuration data
const navConfig = {
  primary: [
    { name: "Home", link: "index.html" },
    { name: "About", link: "#about" },
    { name: "Academics", link: "#academics" },
    { name: "Research", link: "#research" }
  ],
  secondary: [
    { name: "Admissions", link: "#admissions" },
    { name: "Campus Life", link: "#campus" },
    { name: "News & Events", link: "#news" }
  ]
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
      <ul class="secondary-nav">
        ${navConfig.secondary.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join("")}
      </ul>
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
      <div class="nav-title">Primary Navigation</div>
      <ul>
        ${navConfig.primary.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join("")}
      </ul>
      
      <div class="nav-title">Secondary Navigation</div>
      <ul>
        ${navConfig.secondary.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join("")}
      </ul>
    </nav>
  `;

  container.innerHTML = sidebarNavHTML;
}

// Automatically populate links and update dynamic items on load
document.addEventListener("DOMContentLoaded", () => {
  renderTopNav();
  renderSidebarNav();

  // Set current dynamic year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
