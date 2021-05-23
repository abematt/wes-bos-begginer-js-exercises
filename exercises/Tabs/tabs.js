const tab = document.querySelector(".tabs");
const tabButtons = tab.querySelectorAll("[role=tab]");
const tabPanels = Array.from(tab.querySelectorAll("[role=tabpanel]"));

function handleTabClick(event) {
  //Hide all the other tab panels
  console.log(tabPanels);
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  //Mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });
  //Mark clicked tab as selected
  const { id } = event.currentTarget;

  //Method 1

  //   const tabPanel = tab.querySelector(`[aria-labelledby=${id}]`);
  //   tabPanel.hidden = false;

  event.currentTarget.setAttribute("aria-selected", true);
  //Find the associated tab panel and show it

  //Method 2 for arrays
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute(`aria-labelledby`) === id
  );
  tabPanel.hidden = false;
}
tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
