/*show menu nav click*/
$("#navToggle").click(function(event) {
    event.preventDefault();
    $(".menu").fadeToggle(0);
    $("nav .inner").toggleClass("white");
    $(".menu").toggleClass("white");
    $("#logo a").toggleClass("black");
});

//nascondi/mostra menu
$(window).resize(function () {

    if ( $(window).width() > 769) {
      $(".menu").css({'display':'block'});
      $("#navToggle").css({'display':'none'});

      //active click change color
      $(".menu ul li a").click(function(event) {
          $('li a').removeClass('active');
          $(this).addClass('active');
          event.preventDefault()
        }
      );
      //click logo remove class li
      $("#logo").click(function(event) {
            $('li').removeClass('active');
          }
      );
    } else {
      //remove iconbar when resize
      $("#nav-icon4").removeClass("open");
      $(".menu").css({'display':'none'});
      $("#navToggle").css({'display':'block'});
      $("nav .inner").removeClass("white");
      $(".menu").removeClass("white");
      $("#logo a").removeClass("black");

      //active click change color
      $(".menu ul li a").click(function(event) {
          $('li a').removeClass('active');
          $(this).addClass('active');
          event.preventDefault()

          //click li a change to normal
          $("#nav-icon4").removeClass('open');
          $(".menu").fadeOut(0);
          $("nav .inner").removeClass("white");
          $(".menu").removeClass("white");
          $("#logo a").removeClass("black");
        }
      );

      //click logo remove class li
      $("#logo").click(function(event) {
          $('li').removeClass('active');
          //click li a change to normal
          $("#nav-icon4").removeClass('open');
          $(".menu").fadeOut(0);
          $("nav .inner").removeClass("white");
          $(".menu").removeClass("white");
          $("#logo a").removeClass("black");
        }
      );

    }
});

//header all: allo scrollare lo scrollbar giu aggiunge border bottom
$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    
    if (scroll > 50) {
      
      $("nav").addClass("change-background");
      $("span").addClass("change-color-hamburger");
      $(".menu").addClass("change-menu");
      $("nav .inner").addClass("change-inner");
    } else {
      $("nav").removeClass("change-background");
      $("span").removeClass("change-color-hamburger");
      $(".menu").removeClass("change-menu");
      $("nav .inner").removeClass("change-inner");
    }
});

