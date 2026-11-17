document.addEventListener('DOMContentLoaded', function () {
        const splide = new Splide('.splide', {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 3,
                gap: '20px',
                arrows: false,
                pagination: false,
                autoScroll: {
                        speed: 1,
                        pauseOnHover: true,
                },
        });
        splide.mount(window.splide.Extensions);
});