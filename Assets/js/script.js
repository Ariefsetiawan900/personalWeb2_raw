window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
  // ---------- Page Loader ---------
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
});

// =========== About Tabs =============
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
const hideSection = () => {
  document.querySelector("section.active").classList.toggle("fade-out");
};

const toggleNavbar = () => {
  document.querySelector(".header").classList.toggle("active");
};

// =========== Active Section =============
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    // active the overlay to prevent mutiple click
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

// =========== About Tabs =============
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// =========== Portofolio Item Details Popup =============
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortofolioPopup();
    document.querySelector(".portofolio-popup").scrollTo(0, 0);
    portofolioItemDetails(e.target.parentElement);
  }
});

const togglePortofolioPopup = () => {
  document.querySelector(".portofolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
};

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortofolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortofolioPopup();
  }
});

const portofolioItemDetails = (portofolioItem) => {
  document.querySelector(".pp-thumbnail img").src =
    portofolioItem.querySelector(".portofolio-item-thumbnail img").src;

  document.querySelector(".pp-header h3").innerHTML =
    portofolioItem.querySelector(".portofolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portofolioItem.querySelector(
    ".portofolio-item-details"
  ).innerHTML;
};
