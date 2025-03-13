let topbar = document.querySelector("nav");
if (window.location.pathname !== "/index.html") {
  if (!topbar.classList.contains("Scrolled")) {
    topbar.classList.add("Scrolled");
  }
}

document.getElementById("MenuBtn").addEventListener("click", () => {
  document.getElementById("MenuBar").classList.toggle("active");
  let menuBtn = document.getElementById("MenuBtn");
  menuBtn.textContent = menuBtn.textContent.trim() === "sort" ? "close" : "sort";
  menuBtn.classList.toggle("active");
  let displayTogglers = document.querySelectorAll(".DisplayToggler");
  let displayTogglersArr = [...displayTogglers];
  displayTogglersArr.forEach(element => {
    let data = element.getAttribute("data-target");
    let togglerList = document.querySelectorAll(".Toggleable");
    let togglerArray = [...togglerList];
    togglerArray.forEach(e => {
      e.classList.remove("active");
    })
  });
  });


let FilterOptions = document.querySelectorAll(".FilterOptions");
let FilterOptionsArr = [...FilterOptions]
FilterOptionsArr.forEach(element => {
  let data = element.getAttribute("data-target");
  element.addEventListener("click", () => {

    FilterOptionsArr.forEach(e => {
      if(e.getAttribute("data-target") === element.getAttribute("data-target"))
      {
        e.classList.add("active");
      }
      else{
        e.classList.remove("active");
      }
    })
    let filterList = document.querySelectorAll(".Filter");  
    filterList = [...filterList];
    filterList.forEach(e => {
      if (e.getAttribute("data-id").includes(data)) {
        e.classList.remove("d-none");
      } else {
        e.classList.add("d-none");
      }
    })
  })
})



let displayTogglersNew = document.querySelectorAll(".DisplayToggler");
let displayTogglersArrNew = [...displayTogglersNew];
displayTogglersArrNew.forEach(element => {
  let data = element.getAttribute("data-target");
  element.addEventListener("click", () => {
    let togglerList = document.querySelectorAll(".Toggleable");
    let togglerArray = [...togglerList];
    togglerArray.forEach(e => {
      if (e.getAttribute("data-id") === data) {
        e.classList.toggle("active");
      } else {
        e.classList.remove("active");
      }
    })
  })
});

window.onscroll = function () {
  if (window.location.pathname !== "/index.html") {
    return;
  }
  if (window.scrollY > 50) {
    topbar.classList.add("Scrolled");
  } else {
    topbar.classList.remove("Scrolled");
  }
}

$('.Banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.Banner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  let slidesWrapper = document.getElementById("BannerSlideBtns");
  let slides = slidesWrapper.children;
  let slidesArr = [...slides];
  slidesArr.forEach((element) => {
    element.classList.remove("active");
  })
  slides[nextSlide].classList.add("active");

});

$('.multiple').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  customPaging: function (slider, i) {
    // this example would render "tabs" with titles
    return '<div class="dot"></div>';
  },
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 2400,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
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
  customPaging: function (slider, i) {
    // this example would render "tabs" with titles
    return '<div class="dot"></div>';
  },
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 2400,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
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

function DropDownSelect(e) {
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
  customPaging: function (slider, i) {
    // this example would render "tabs" with titles
    return '<div class="dot"></div>';
  },
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 2400,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
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

let ProductsPageRedirect = document.querySelectorAll(".ProductsPageRedirect");
ProductsPageRedirect.forEach((element) => {
  element.addEventListener("click", () => { window.location.href = "./Products.html" })
})


let gridItem = document.querySelectorAll(".griditem");
let cemPorcentoGridChildren = document.querySelector(".cemPorcentoGrid");
let Items = document.querySelectorAll(".item");
let itemsArr;
if (cemPorcentoGridChildren) {
  cemPorcentoGridChildren = cemPorcentoGridChildren.children;
  itemsArr = [...gridItem, ...Items, ...cemPorcentoGridChildren];
}
else {
  itemsArr = [...gridItem, ...Items];
}
itemsArr.forEach((element) => {
  element.addEventListener("click", () => { window.location.href = "./Product.html" })
})

