/*======================================================
 *  go to top btn start here
 *======================================================*/

/* scroll variable */
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

/* scroll container */
const scrollContainer = () => {
  return document.documentElement || document.body;
};

/* to show or hide btn */
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

/* smooth scrolling */
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

/* trigger scroll btn */
backToTopButton.addEventListener("click", goToTop)





/*======================================================
 *  go to top btn start here
 *======================================================*/

// Add active class to the current button (highlight it)
const mainHrs = document.getElementById("header-right-side");
const allBtn = mainHrs.getElementsByClassName("header-btn");

for (let i = 0; i < allBtn.length; i++) {
  
  allBtn[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");

  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }

  this.className += " active";
  });
}




/*======================================================
 *  JS End here
 *======================================================*/

