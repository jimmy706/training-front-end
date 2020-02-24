var slideshows = Array.from(document.getElementsByClassName("slideshow"));

slideshows.forEach(function(slideshow) {
  var slides = Array.from(slideshow.getElementsByClassName("slide"));
  var dots = Array.from(slideshow.getElementsByClassName("dot"));
  var numberOfSlide = slides.length;
  var indexActive = 0;
  var arrowLeft = slideshow.querySelector(".prev");
  var arrowRight = slideshow.querySelector(".next");
  var inf;
  var delayTime = Number(slideshow.dataset["delay"]);
  if (delayTime) {
    inf = setInterval(plus, delayTime);
  }
  if (dots.length) {
    dots.forEach(function(dot) {
      dot.addEventListener("click", function() {
        var i = Number(this.dataset["index"]);
        clearInterval(inf);
        slides.forEach(function(s) {
          s.classList.remove("active");
        });
        slides[i].classList.add("active");
        indexActive = i;
        activeDot();
        if (delayTime) {
          inf = setInterval(plus, delayTime);
        }
      });
    });
  }

  function plus() {
    plusSlide(1);
  }

  if (arrowLeft) {
    arrowLeft.addEventListener("click", function() {
      plusSlide(-1);
    });
  }
  if (arrowRight) {
    arrowRight.addEventListener("click", plus);
  }

  function plusSlide(n) {
    showSlide((indexActive += n));
  }

  function activeDot() {
    dots.forEach(function(d) {
      var index = d.dataset["index"];
      if (index == indexActive) {
        d.classList.add("active");
      } else {
        d.classList.remove("active");
      }
    });
  }

  function showSlide(n) {
    if (n >= numberOfSlide) {
      indexActive = 0;
    } else if (n < 0) {
      indexActive = numberOfSlide - 1;
    }

    activeDot();

    slides.forEach(function(s) {
      s.classList.remove("active");
    });
    slides[indexActive].classList.add("active");
  }
});
