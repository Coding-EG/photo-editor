/* canvas image loader*/
function uplo() {
  var reader = new FileReader();

  reader.onload = function () {
    var output = document.getElementById("im");

    output.src = reader.result;

    /* when image loaded function run*/

    output.onload = function () {
      var canvas = document.getElementById("load");

      var can = canvas.getContext("2d");

      var canvas_image = document.getElementById("im");
      /* get image inherit size*/
      canvas.width = canvas_image.width;
      canvas.height = canvas_image.height;

      can.filter = "";
      can.drawImage(
        canvas_image,
        0,
        0,
        canvas_image.width,
        canvas_image.height
      );

      /* input range show and hide function*/

      document.getElementById("editor").style.display = "block";

      /* image when change will reset*/
      document.getElementById("reset").reset();

      var ranges = document.querySelectorAll(".data");
      var ran = document.querySelectorAll("span");
      var data = new Array();
      data = [1, 50, 50, 50, 1, 100, 1, 100, 100, 100];

      var unit = new Array();
      unit = ["px", "%", "%", "%", "px", "%", "<sup>o", "%", "%", "%"];

      for (
        i = 0, j = 0, k = 0, l = 0;
        i < ranges.length, j < ran.length, k < data.length, l < unit.length;
        i++, j++, k++, l++
      ) {
        ran[j].innerHTML = ranges[i].value * data[k] + unit[l];
      }

      /* input value*/
    };
  };
  reader.readAsDataURL(event.target.files[0]);
}

function create() {
  var canvas = document.getElementById("load");
  var canvas_img = canvas.toDataURL("image/jpeg", 1);
  var can_logo = document.getElementById("can_logo");
  can_logo.src = canvas_img;
  can_logo.onload = function () {
    var logo = document.getElementById("logo");

    var canvas_logo = document.getElementById("can_logo");
    var can = logo.getContext("2d");

    /* get image inherit size*/
    var canvas_image = document.getElementById("im");
    logo.width = canvas_image.width;
    logo.height = canvas_image.height;

    can.drawImage(canvas_logo, 0, 0, canvas_image.width, canvas_image.height);
    can.strokeStyle = "red";
    can.font = canvas_image.width / 30 + "px black arial";

    can.strokeText(
      "Saqlain",
      canvas_image.width - (canvas_image.width / 30) * 4,
      canvas_image.height - canvas_image.width / 40
    );
    var canvas_link = document.getElementById("logo");

    var link = canvas_link.toDataURL("image/jpeg", 1);
    if (link != "data:,") {
      var down = document.createElement("a");
      down.download = "SnEditor";

      down.href = link;

      down.click();
    } else {
    }
  };
}

function edit() {
  var range_value = document.querySelectorAll(".data");
  var ran = document.querySelectorAll("span");
  var data = new Array();
  data = [1, 50, 50, 50, 1, 100, 1, 100, 100, 100];

  var unit = new Array();
  unit = ["px", "%", "%", "%", "px", "%", "<sup>o", "%", "%", "%"];

  for (
    i = 0, j = 0, k = 0, l = 0;
    i < range_value.length, j < ran.length, k < data.length, l < unit.length;
    i++, j++, k++, l++
  ) {
    ran[j].innerHTML = range_value[i].value * data[k] + unit[l];
  }

  /* canvas photo edit work*/
  var ranges = new Array();
  var ranges = [];

  for (v = 0, x = 0; v < range_value.length, x < range_value.length; v++, x++) {
    ranges[x] = range_value[v].value;
  }

  var canvas = document.getElementById("load");
  var can = canvas.getContext("2d");

  var canvas_image = document.getElementById("im");
  /* get image inherit size*/
  canvas.width = canvas_image.width;
  canvas.height = canvas_image.height;
  can.filter =
    "blur(" +
    ranges[0] +
    "px)brightness(" +
    ranges[1] +
    ")contrast(" +
    ranges[2] +
    ")saturate(" +
    ranges[3] +
    ")drop-shadow(" +
    ranges[4] +
    "px " +
    ranges[4] +
    "px " +
    (ranges[4] / 3) * 4 +
    "px red)grayscale(" +
    ranges[5] +
    ")hue-rotate(" +
    ranges[6] +
    "deg)invert(" +
    ranges[7] +
    ")sepia(" +
    ranges[8] +
    ")opacity(" +
    ranges[9] +
    ")";

  can.drawImage(canvas_image, 0, 0, canvas_image.width, canvas_image.height);
}
