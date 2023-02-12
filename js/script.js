var hoverElements = document.getElementsByClassName("hover-element");

for (var i = 0; i < hoverElements.length; i++) {
  hoverElements[i].onmouseover = function () {
    this.style.opacity = 0.5;
    this.style.color = "white";
  };

  hoverElements[i].onmouseout = function () {
    this.style.opacity = 1;
    this.style.color = "";
  };
}
