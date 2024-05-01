var s = 1000;
speed1.addEventListener("input", vis_speed);
function vis_speed() {
  var array_speed = speed1.value;
  switch (parseInt(array_speed)) {
    case 1:
      s = 1;
      break;
    case 2:
      s = 10;
      break;
    case 3:
      s = 100;
      break;
    case 4:
      s = 1000;
      break;
    case 5:
      s = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(array_size / 10) * s);
}
var delay_time = 10000 / (Math.floor(array_size / 10) * s);
var c_delay = 0;
function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

function enable_buttons() {
  window.setTimeout(function () {
    for (var i = 0; i < algos.length; i++) {
      algos[i].classList = [];
      algos[i].classList.add("unselected");

      algos[i].disabled = false;
      inp.disabled = false;
      generate.disabled = false;
      speed1.disabled = false;
    }
  }, (c_delay += delay_time));
}
