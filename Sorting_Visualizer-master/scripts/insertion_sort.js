function Insertion() {
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";
  document.getElementById("Space_Worst").innerText = "O(1)";
  c_delay = 0;
  for (var j = 0; j < array_size; j++) {
    div_update(divs[j], div_sizes[j], "#2d7f9d");

    var key = div_sizes[j];
    var i = j - 1;
    while (i >= 0 && div_sizes[i] > key) {
      div_update(divs[i], div_sizes[i], "#fd8a8a");
      div_update(divs[i + 1], div_sizes[i + 1], "#fd8a8a");
      div_sizes[i + 1] = div_sizes[i];
      div_update(divs[i], div_sizes[i], "#fd8a8a");
      div_update(divs[i + 1], div_sizes[i + 1], "#fd8a8a");
      div_update(divs[i], div_sizes[i], "#957dad");
      if (i == j - 1) {
        div_update(divs[i + 1], div_sizes[i + 1], "#2d7f9d");
      } else {
        div_update(divs[i + 1], div_sizes[i + 1], "#957dad");
      }
      i -= 1;
    }
    div_sizes[i + 1] = key;

    for (var t = 0; t < j; t++) {
      div_update(divs[t], div_sizes[t], "#c0d8c0");
    }
  }
  div_update(divs[j - 1], div_sizes[j - 1], "#c0d8c0");

  enable_buttons();
}
