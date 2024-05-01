var inp = document.getElementById("a_size"),
  array_size = inp.value;
var generate = document.getElementById("gen");
var speed1 = document.getElementById("speed");
var algos = document.querySelectorAll(".algos button");
var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";
generate.addEventListener("click", generate_array);
inp.addEventListener("input", update_array_size);
function generate_array() {
  cont.innerHTML = "";
  for (var i = 0; i < array_size; i++) {
    div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp.max - inp.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:#957dad; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}
function update_array_size() {
  array_size = inp.value;
  generate_array();
}

window.onload = update_array_size();
for (var i = 0; i < algos.length; i++) {
  algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
  for (var i = 0; i < algos.length; i++) {
    algos[i].classList = [];
    algos[i].classList.add("locked");

    algos[i].disabled = true;
    inp.disabled = true;
    generate.disabled = true;
    speed.disabled = true;
  }
}

function runalgo() {
  disable_buttons();

  this.classList.add("selected");
  switch (this.innerHTML) {
    case "Bubble":
      Bubble();
      break;
    case "Selection":
      Selection_sort();
      break;
    case "Insertion":
      Insertion();
      break;
    case "Merge":
      Merge();
      break;
    case "Quick":
      Quick();
      break;
    case "Heap":
      Heap();
      break;
  }
}
