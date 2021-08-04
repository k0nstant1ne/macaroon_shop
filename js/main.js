import Swiper, {Pagination} from 'swiper';

Swiper.use([Pagination]);

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 100,
    pagination: {
    el: '.swiper-pagination',
    },
});


