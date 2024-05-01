function Bubble() {
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";
  document.getElementById("Space_Worst").innerText = "O(1)";
  c_delay = 0;
  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "#2d7f9d");
      if (div_sizes[j] > div_sizes[j + 1]) {
        div_update(divs[j], div_sizes[j], "#fd8a8a");
        div_update(divs[j + 1], div_sizes[j + 1], "#fd8a8a");
        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;
        div_update(divs[j], div_sizes[j], "#fd8a8a");
        div_update(divs[j + 1], div_sizes[j + 1], "#fd8a8a");
      }
      div_update(divs[j], div_sizes[j], "#957dad");
    }
    div_update(divs[j], div_sizes[j], "#c0d8c0");
  }
  div_update(divs[0], div_sizes[0], "#c0d8c0");
  enable_buttons();
}
