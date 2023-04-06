function highlightParas(containing) {
  if (typeof containing === "string") {
    containing = new RegExp(`\\b${containing}\\b`, "i");
    const paras = document.getElementsByTagName("p");
    for (let p of paras) {
      if (containing.test(p.textContent))
        p.classList.add("alert", "alert-primary");
    }
  }
}

function removeParaHighlights() {
  const paras = document.querySelectorAll("p.alert");
  for (let p of paras) {
    p.classList.remove("alert", "alert-primary");
  }
}

Array.from(document.querySelectorAll('[data-action="highlight"]'), (el) =>
  el.addEventListener("click", (evt) => {
    evt.preventDefault();
    removeParaHighlights();
    highlightParas(el.dataset.containing);
  })
);

const removeHighlightActions = document.querySelectorAll(
  '[data-action="removeHighlights"]'
);
for (let a of removeHighlightActions) {
  a.addEventListener("click", (evt) => {
    evt.preventDefault();
    removeParaHighlights();
  });
}

let find = document.querySelector("[data-find]");

find.addEventListener("input", function () {
  console.log(this.value);
  this.nextElementSibling.dataset.containing = this.value;
});
