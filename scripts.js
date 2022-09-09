//Function expression to select elements
const selectElement = (element) => {
  return document.querySelector(element);
};

//Open the menu click
const openButton = selectElement(".open");

openButton.addEventListener("click", () => {
  const navList = selectElement(".nav-list");
  navList.classList.add("active");
});

//Close the menu click
const closeButton = selectElement(".close");

closeButton.addEventListener("click", () => {
  const navList = selectElement(".nav-list");
  navList.classList.remove("active");
});
