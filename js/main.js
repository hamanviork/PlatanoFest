$( document ).ready(function() {
    let pageSlider = new Swiper('.page', {
        // Свои классы
        wrapperClass: "page__wrapper",
        slideClass: "page__screen",

        // Вертикальный слайдер
        direction: "vertical",

        // Кол-во слайдов для показа
        slidesPerView: "auto",

        // Включенный параллакс
        parallax: true,

        keyboard: {
            // Вкл, выкл
            enabled: true,

            // В пределах viewport
            onlyInViewsport: true,

            // Вкл управление клавишами
            pageUpDown: true,
        },

        // Управление колёсиком мышки

        
        mousewheel: {
            enabled: true,
            //forceToAxis: true,
            // Чувствительность
            sensitivity: 1,
        },

        // Если будет только 1 слайд
        watchOverflow: true,

        // Скорость
        speed: 800,

        // Обнавление слайдера
        observer: true,
        observeParents: true,
        observeSlideChildren: true,

        // Навигация
        pagination: {
            el: '.page__pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'page__bullet',
            bulletActiveClass: 'page__bullet_active',
        },

        // Скролл
        scrollbar: {
            el: ".page__scroll",
            dragClass: "page__drag-scroll",
            draggable: true,
        },

        init: false,

        on: {
            init: function() {
                menuSlider();
            },
            slideChange: function () {
                menuSliderRemove();
                menuLinks[pageSlider.realIndex].classList.add('_active');
            },
        },

    });

    let menuLinks = document.querySelectorAll('.menu__link');

    function menuSlider() {
        if(menuLinks.length > 0) {
            menuLinks[pageSlider.realIndex].classList.add('_active');
            for(let index = 0; index < menuLinks.length; index++) {
                const menuLink = menuLinks[index];
                menuLink.addEventListener("click", function(e) {
                    menuSliderRemove();
                    pageSlider.slideTo(index, 800);
                    menuLink.classList.add('_active');
                    e.preventDefault();
                });
                if(index == 0) {
                    $(this).addClass('active');
                    //$("").removeClass('active');
                }
            }
        }
    }

    function menuSliderRemove() {
        let menuLinkActive = document.querySelector(".menu__link._active");
        
        if (menuLinkActive) {
            menuLinkActive.classList.remove('_active');
        }
    }

    pageSlider.init(); 
});