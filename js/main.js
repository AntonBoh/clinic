$(document).ready(function () {

    $('.slider').slick({
        dots: true,
        speed: 250,
        infinite: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            },
        ]
    });

});



let teamShowBtn = document.querySelector(".team__show-btn");
let teamCard = document.querySelectorAll(".team__card");

teamShowBtn.addEventListener("click", function (event) {
    event.preventDefault();
    teamCard.forEach((el) => {
        el.classList.remove("team__card--hidden");
    });
    teamShowBtn.classList.add("team__show-btn--hide");
});



document.querySelector('.popup-btn').addEventListener('click', e => {
    let button = e.target;
    let popupName = button.popupName // data-popupName='1'

    document.querySelectorAll('[data-popup-name=' + popupName + ']').classList.add('active')
})

