// scroll animation
const features = document.querySelectorAll(".feature, #feature, #footer-container");

console.log(features)

const options = {
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, options)

features.forEach((el) => observer.observe(el));

function showMenuBar() {
  const mobileNavBar = document.getElementById("mobile-navbar");

  if(mobileNavBar.classList.contains("mobile-navbar__open")){
      mobileNavBar.classList.remove("mobile-navbar__open");
  } else {
      mobileNavBar.classList.add("mobile-navbar__open");
  }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// homepage animation
const welcome = document.getElementById("welcome")
const firstAnimation = document.getElementById("ani-1");
const secondAnimation = document.getElementById("ani-2");
const thirdAnimation = document.getElementById("ani-3");
setTimeout((ev)=>{
  firstAnimation.classList.add("show");
  secondAnimation.classList.add("show");
  thirdAnimation.classList.add("show");
  welcome.style.display="none"
}, 2000)
