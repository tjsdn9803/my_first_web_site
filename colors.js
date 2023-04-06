var Links = {
  setColor: function (color) {
    var a_list = document.querySelectorAll("a");
    var i = 0;
    while (i < a_list.length) {
      a_list[i].style.color = color;
      i += 1;
    }
  },
};

var Body = {
  value: "night",
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};

function nightDayHandler(self) {
  if (Body.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    Body.value = "day";
    Links.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    Body.value = "night";
    Links.setColor("blue");
  }
}
