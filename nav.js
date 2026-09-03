document.addEventListener("DOMContentLoaded", function () {
    // Define the navigation HTML structure
    const navHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="nav-brand">Kaden Klein</a>
                <ul class="nav-links">
                    <li><a href="about.html">About me</a></li>
                    <li><a href="projects.html">Project</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;

    // Inject the navigation bar at the top of the <body> element
    document.body.insertAdjacentHTML("afterbegin", navHTML);
});
