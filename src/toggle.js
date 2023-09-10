const turn = () => {
  const togglebtn = document.querySelectorAll("#toggle_btn");

  //checking the theme form local storage;
  const ispresent = localStorage.getItem("theme");

  // mounting the theme, if it is truthy;
  ispresent && document.body.classList.add("light-mode");

  //handle the theme
  const handletheme = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };

  //turn the theme on/off;
  togglebtn.forEach((btn) => {
    btn.addEventListener("click", handletheme);
  });
};
export default turn;
