let tabPanels = document.getElementsByClassName("courses__tab--panel");
let tabBtns = document.getElementsByClassName("courses__tab--btn");
tabPanels[1].style.display = "none";
tabBtns[0].classList.add("active");
function showTab(index) {
  for (const el of tabPanels) {
    el.style.display = "none";
  }
  for (const el of tabBtns) {
    el.classList.remove("active");
  }
  tabBtns[index].classList.add("active");
  tabPanels[index].style.display = "flex";
}
