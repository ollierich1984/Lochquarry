document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const carousel = document.querySelector('.carousel');

    function moveCarousel() {
        console.log('Moving carousel');
        if (index >= items.length) {
            index = 0;
        }
        const offset = -100 * index;
        carousel.style.transform = `translateX(${offset}vw)`;
        index++;
    }

    setInterval(moveCarousel, 5000);
});


const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

document.addEventListener("scroll", function(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scroll-to-top-btn").style.display = "block";
      } else {
        document.getElementById("scroll-to-top-btn").style.display = "none";
      }
})


scrollToTopBtn.addEventListener("click", () => {
    console.log("scroll");
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth",
    });
  });



