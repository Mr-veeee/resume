// Add a smooth scrolling effect to the links in the resume.
const links = document.querySelectorAll(".resume-link");
for (const link of links) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
}

// Add a hover animation to the social icons.
const socialIcons = document.querySelectorAll(".social-icon");
for (const icon of socialIcons) {
  icon.addEventListener("mouseover", function() {
    this.classList.add("hover");
  });
  icon.addEventListener("mouseout", function() {
    this.classList.remove("hover");
  });
}

//
