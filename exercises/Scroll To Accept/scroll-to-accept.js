const terms = document.querySelector(".terms-and-conditions");
const watch = document.querySelector(".watch");
const button = document.querySelector("button");

function obCallBack(event) {
  if (event[0].intersectionRatio === 1) {
    button.disabled = false;
  }
  //stop observing the button
  ob.unobserve(terms.lastElementChild);
}
//Intersection observer or watcher of intersection

const ob = new IntersectionObserver(obCallBack, {
  root: terms,
  threshold: 1,
});

//Define what to observe
ob.observe(terms.lastElementChild);
