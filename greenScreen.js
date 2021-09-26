var uploadFirst = 0;
var imagefg = null;
var imagebg = null;

function upload() {
  var img = document.getElementById("id_fileUploadImg");
  var canvas1 = document.getElementById("canvas1");
  var canvas2 = document.getElementById("canvas2");

  if (uploadFirst == 0) {
    imagefg = new SimpleImage(img);
    imagefg.drawTo(canvas1);
    uploadFirst = 1;
  } else {
    imagebg = new SimpleImage(img);
    imagebg.drawTo(canvas2);
    uploadFirst = 0;
  }
} // End fonction upload

function applyGreenScreen() {
  if (imagefg == null) {
    alert("Image foreground is null");
  }
  if (imagebg == null) {
    alert("Image background is null");
  } else {
    var canvas3 = document.getElementById("canvas3");
    var ctx = canvas3.getContext("2d");
    imagefg.drawTo(canvas3);

    for (var pixel of imagefg.values()) {
      if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        imagefg.setPixel(
          pixel.getX(),
          pixel.getY(),
          imagebg.getPixel(pixel.getX(), pixel.getY())
        );
      }
    } // end for

    imagefg.drawTo(canvas3);
  } // end of else
} // End function make grey

