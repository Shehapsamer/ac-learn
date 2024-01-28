function addclasss() {
    let services_nav = document.getElementById("services_nav");
    services_nav.classList.toggle("services_nav_tranz");
}

// /////////////////////
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////
window.addEventListener("scroll" , function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
})
    let scrollUp = document.querySelector(".scroll_up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})

var owl = $('#slider_1');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:20,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 100,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 3,
        },
        1100:{
            items: 4,
        },
        1200:{
            items:4
        }
    }
});

function dropdown1() {
  let dropdown = document.getElementById("dropdown1")
  dropdown.classList.toggle("Show_dropdown1")
}

function dropdown2() {
  let dropdown = document.getElementById("dropdown2")
  dropdown.classList.toggle("Show_dropdown2")
}

function dropdown3() {
  let dropdown = document.getElementById("dropdown3")
  dropdown.classList.toggle("Show_dropdown3")
}

function dropdown4() {
  let dropdown = document.getElementById("dropdown4")
  dropdown.classList.toggle("Show_dropdown4")
}

function dropdown5() {
  let dropdown = document.getElementById("dropdown5")
  dropdown.classList.toggle("Show_dropdown5")
}

