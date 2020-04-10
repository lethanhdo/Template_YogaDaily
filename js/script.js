// header
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})


//slide
      //class 1
    function onHover1()
    {
        $("#news1").attr('src', 'img/cl1.jpg');
    }

    function offHover1()
    {
        $("#news1").attr('src', 'img/cl11.JPG');
    }
     //class 2
     function onHover2()
     {
         $("#news2").attr('src', 'img/cl2.jpg');
     }
 
     function offHover2()
     {
         $("#news2").attr('src', 'img/cl22.JPG');
     }
      //class 3
    function onHover3()
    {
        $("#news3").attr('src', 'img/cl3.jpg');
    }

    function offHover3()
    {
        $("#news3").attr('src', 'img/cl33.JPG');
    }
     //class4
     function onHover4()
     {
         $("#news4").attr('src', 'img/cl4.jpg');
     }
 
     function offHover4()
     {
         $("#news4").attr('src', 'img/cl44.JPG');
     }
      //class 5
    function onHover5()
    {
        $("#news5").attr('src', 'img/cl5.jpg');
    }

    function offHover5()
    {
        $("#news5").attr('src', 'img/cl55.JPG');
    }
     //class 6
     function onHover6()
     {
         $("#news6").attr('src', 'img/cl6.jpg');
     }
 
     function offHover6()
     {
         $("#news6").attr('src', 'img/cl66.JPG');
     }


     //////////////////// Top sroll button
     //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

///////////////////////////////////////////////////
function openContact1(){
      var ex = document.getElementById("changeText1");
      ex.classList.toggle("test");
    }
    function openContact2(){
      var ex = document.getElementById("changeText2");
      ex.classList.toggle("test");
    }
    function openContact3(){
      var ex = document.getElementById("changeText3");
      ex.classList.toggle("test");
    }
    function openContact4(){
      var ex = document.getElementById("changeText4");
      ex.classList.toggle("test");
    }

    //////////////////////////////////////////////////////
    function toggleResetPswd(e){
      e.preventDefault();
      $('#logreg-forms .form-signin').toggle() // display:block or none
      $('#logreg-forms .form-reset').toggle() // display:block or none
  }
  
  function toggleSignUp(e){
      e.preventDefault();
      $('#logreg-forms .form-signin').toggle(); // display:block or none
      $('#logreg-forms .form-signup').toggle(); // display:block or none
  }
  
  $(()=>{
      // Login Register Form
      $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
      $('#logreg-forms #cancel_reset').click(toggleResetPswd);
      $('#logreg-forms #btn-signup').click(toggleSignUp);
      $('#logreg-forms #cancel_signup').click(toggleSignUp);
  })