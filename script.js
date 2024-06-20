document.addEventListener('DOMContentLoaded', function () {
    // Your existing code here
    const nav = document.querySelector(".nav").innerHTML = `
        <div class="left">
            <a href="/index.html" class="home hover-text">Home</a>
        </div>
        <div class="right">
            <div class="link-1">
                <a href="" class="nav-lesson hover-text">Lesson</a>
                <a href="" class="nav-javascript hover-text">Javascript</a>
                <a href="" class="nav-portfolio hover-text">Portfolio</a>
                <a href="" class="nav-api hover-text">API</a>
            </div>

            <!-- Dropdown Container -->
            <div class="dropdown">
                <button class="nav-burger">☰</button>
                <!-- Dropdown Content -->
                <div class="dropdown-content">
                    <a href="" class="nav-lesson hover-text">Lesson</a>
                    <a href="" class="nav-javascript hover-text">Javascript</a>
                    <a href="" class="nav-portfolio hover-text">Portfolio</a>
                    <a href="" class="nav-api hover-text">API</a>
                </div>
            </div>
        </div>
    `;

    // Dropdown JavaScript
    document.querySelector('.nav-burger').addEventListener('click', function () {
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function (e) {
        const dropdownContent = document.querySelector('.dropdown-content');
        const navBurger = document.querySelector('.nav-burger');
        // Check if the clicked area is not the dropdown or the nav-burger
        if (!dropdownContent.contains(e.target) && !navBurger.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});