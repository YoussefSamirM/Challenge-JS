let addClasses = document.querySelector(".classes-to-add");
let removeClasses = document.querySelector(".classes-to-remove");
let classListDiv = document.querySelector(".classes-list div");
let allClasses = document.querySelectorAll("input");

// NoClasses Function

let p = document.createElement("p");
p.textContent = "No Classes To Show";

function noClasses() {
  classListDiv.appendChild(p);
}

window.onload = function () {
  noClasses();
};

// Add Function

function add() {
  let wordsAdd = addClasses.value.toLowerCase().split(" ").sort();

  wordsAdd.forEach((word) => {
    let span = document.createElement("span");
    if (word !== "") {
      span.textContent = word;
      classListDiv.appendChild(span);
    }
    if (span) {
      p.remove();
    }
  });
}

addClasses.onblur = function () {
  add();
  addClasses.value = "";
};

// Remove Function

function remove() {
  let wordsRemove = removeClasses.value.toLowerCase().split(" ").sort();

  let spanRemove = document.querySelectorAll("span");

  wordsRemove.forEach((word) => {
    spanRemove.forEach((e) => {
      if (word === e.textContent) {
        e.remove();
      }
      if (e) {
        p.remove();
      }
      if (word === e.textContent && word != "") {
        noClasses();
      }
    });
  });
}

removeClasses.onblur = function () {
  remove();
  removeClasses.value = "";
};
