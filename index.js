
document.getElementById("MenuBtn").addEventListener("click", ()=> {document.getElementById("MenuBar").classList.toggle("active");
});
let displayTogglers = document.querySelectorAll(".DisplayToggler");
let displayTogglersarr = [...displayTogglers];
displayTogglersarr.forEach(element => {
    let data = element.getAttribute("data-target");
    element.addEventListener("click",()=> {
       togglerList =document.querySelectorAll(".Toggleable");
       togglerArr = [...togglerList];
       togglerArr.forEach(e => {
        if(e.getAttribute("data-id") === data)
        {
            e.style.display = "block";
        }else {
            e.style.display = "none";
        }
       })
    })
});
window.onscroll = function () {
    let topbar = document.querySelector("nav");
    if(window.scrollY > 50){
        topbar.classList.add("Scrolled");
    }else {
        topbar.classList.remove("Scrolled");
    }
}
$('.multiple').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<div class="dot"></div>';
      },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$('.GridSlider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<div class="dot"></div>';
      },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  function DropDownSelect(e)
  {
    closestDropDown = e.closest(".dropdown");
    closestDropDown.firstElementChild.textContent = e.textContent;
  }

  $('.cemPorcentoSlider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<div class="dot"></div>';
      },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

