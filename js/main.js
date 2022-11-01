

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


let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
}

let teamShowBtn = document.querySelector(".team__show-btn"),
    teamCard = document.querySelectorAll(".team__card");
teamShowBtn.addEventListener("click", e => {
    e.preventDefault();
    teamCard.forEach((el) => {
        el.classList.remove("team__card--hidden");
    });
    teamShowBtn.classList.add("team__show-btn--hide");
});


let burgerBtn = document.querySelector(".header__burger"),
    burgerMenu = document.querySelector('.burgermenu'),
    headerLogo = document.querySelector('.header__logo');
burgerBtn.addEventListener("click", e => {
    burgerBtn.classList.toggle("close");
    burgerMenu.classList.toggle("burger-active");
    headerLogo.classList.toggle("header__logo--active");
});


document.querySelector('.popup-btn').addEventListener('click', e => {
    let button = e.target;
    let popupName = button.dataset.popupName // data-popup-name='1'
    console.log(document.querySelectorAll('[data-popup=' + popupName + ']'));
    document.querySelector('[data-popup=' + popupName + ']').classList.add('active')
});

document.querySelector('.form__close').addEventListener('click', e => {
    document.querySelector('.form-popup').classList.remove('active')
})


/*

const initView = () => {
    initPopups()
    initBurgerMenu()
    initTeamHidden()
}
initView()

const initTeamHidden = () => {
    let teamShowBtn = document.querySelector(".team__show-btn"),
        teamCard = document.querySelectorAll(".team__card");
    teamShowBtn.addEventListener("click", e => {
        e.preventDefault();
        teamCard.forEach((el) => {
            el.classList.remove("team__card--hidden");
        });
        teamShowBtn.classList.add("team__show-btn--hide");
    });
};


burger
const initBurgerMenu = () => {
    let burgerBtn = document.querySelector(".header__burger"),
        burgerMenu = document.querySelector('.burgermenu'),
        headerLogo = document.querySelector('.header__logo');
    burgerBtn.addEventListener("click", e => {
        burgerBtn.classList.toggle("close");
        burgerMenu.classList.toggle("burger-active");
        headerLogo.classList.toggle("header__logo--active");
    });
};



const initPopups = () => {
    document.querySelector('.popup-btn').addEventListener('click', e => {
        let button = e.target;
        let popupName = button.dataset.popupName // data-popup-name='1'
        console.log(document.querySelectorAll('[data-popup=' + popupName + ']'));
        document.querySelector('[data-popup=' + popupName + ']').classList.add('active')
    })
};

*/