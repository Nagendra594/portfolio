const mobile = () => {
  const bars = document.querySelector(".header__bars");
  const mobile_view = document.querySelector(".mobile-view");
  const links = document.querySelectorAll(".mobile-view__link");
  let isopen = false;
  bars.addEventListener("click", () => {
    if (isopen) {
      mobile_view.style.display = "none";
      document.body.style.overflow = "auto";
      isopen = false;
    } else {
      mobile_view.style.display = "flex";
      document.body.style.overflow = "hidden";
      isopen = true;
    }
    if (isopen) {
      console.log(isopen);
      links.forEach((link) => {
        link.addEventListener("click", () => {
          mobile_view.style.display = "none";
          document.body.style.overflow = "auto";
          isopen = false;
        });
      });
    }
  });
};
export default mobile;
