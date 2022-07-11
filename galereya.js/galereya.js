window.onload = function () {



  var headerBurger = document.querySelector('.header-burger');
  var menu = document.querySelector('.menu');
  var body = document.querySelector('.body__two');

  headerBurger.addEventListener('click', function (e) {
    headerBurger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
  });

  $(document).ready(function () {
    $("#arrow").click(function () {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing"
      });
      return false;
    });
  });

  $(document).ready(function () {
    $("#footer-up a").click(function () {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing"
      });
      return false;
    });
  });

  $(document).ready(function () {
    $(".cards_lower__content a").click(function () {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing"
      });
      return false;
    });
  });

  document.getElementById('sale-button').onclick = function () {
    document.querySelector('.sale__none').classList.toggle('sale__none__block');
  }

  document.getElementById('sale__none__close').onclick = function () {
    document.querySelector('.sale__none__block').classList.toggle('sale__none__block__none');
  }
}

var rellax = new Rellax('.rellax');