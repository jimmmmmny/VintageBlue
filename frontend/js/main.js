(function($) {
    $(document).ready(function() {

        (function(){//vintage
            gsap.timeline({})
            .to('.vintage_vid', {clipPath: "circle(100% at 50% 50%)", duration: 3, ease: 'power3.inOut'})

            ScrollTrigger.create({
                trigger: '.vintage',
                start: 'top top',
                end: 'bottom top',
                pin: '.vintage',
                pinSpacing: false
            });
        }());

        (function(){//showcase
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.showcase .layer_title',
                    top: 'top 80%',
                }
            })
            .from('.showcase .layer_title', {opacity: 0, x: 100, duration: 0.7}, 0)
            .from('.showcase .layer_subtitle', {opacity: 0, x: 100, duration: 0.7}, 0.2)
            .from('.showcase_link', {opacity: 0, x: 100, duration: 0.7}, 0.4)

            gsap.fromTo('.neon_pillow', {
                y: -40,
                scale: 0.4,
            }, {
                scrollTrigger: {
                    trigger: '.showcase',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5
                },
                y: -10,
                scale: 1.2,
            });

            gsap.fromTo('.table_lamp', {
                x: -200,
                scale: 0.4,
            }, {
                scrollTrigger: {
                    trigger: '.showcase',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5
                },
                x: 50,
                y: 10,
                scale: 1.4
            });

            gsap.to('.showcase_finds', {
                scrollTrigger: {
                    trigger: '.showcase_finds',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                },
                backgroundColor: '#f1f3f6',
            });

            gsap.to('.showcase_flow', {
                scrollTrigger: {
                    trigger: '.showcase_finds',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                },
                WebkitTextStrokeColor: '#2b3979',
            });
        }());

        (function(){//finds
            let finds_slide = new Swiper('.finds_slide .swiper-container', {
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                },
                parallax: true,
                speed: 700,
            })
        }());

        (function(){//gallery
            let interleaveOffset = 0.8;
            let gallerySlide = new Swiper('.gallery_slide .swiper-container', {
                loop: true,
                parallax: true,
                watchSlidesProgress: true,
                initialSlide: 1,
                centeredSlides: true,
                slidesPerView: 'auto',
                speed: 1500,
                autoplay: {
                    delay: 1300,
                    disableOnInteraction: false,
                },
                on: {
                    progress: function() {
                        let swiper = this;
                        for (let i = 0; i < swiper.slides.length; i++) {
                            let slideProgress = swiper.slides[i].progress;
                            let innerOffset = swiper.width * interleaveOffset;
                            let innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".slide-inner").style.transform =
                            "translate3d(" + innerTranslate + "px, 0, 0)";
                        }
                    },
                    touchStart: function() {
                        let swiper = this;
                        for (let i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },
                    setTransition: function(speed) {
                        let swiper = this;
                        for (let i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".slide-inner").style.transition =
                            speed + "ms";
                        }
                    }
                }
            });
            gallerySlide.autoplay.stop();
            
            ScrollTrigger.create({
                trigger: '.gallery',
                onToggle: function(self) {
                    if(self.isActive) {
                        gallerySlide.autoplay.start();
                    } else {
                        gallerySlide.autoplay.stop();
                    }
                }
            });
        }());

        (function(){//record
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.record',
                    start: 'top 70%',
                    end: 'bottom top',
                    scrub: 1,
                }
            })
            .fromTo('.record_svg', {y: -200}, {rotate: 180, y: '100%', scale: 1.5, transformOrigin: 'center center'})
        }());

        (function(){//inter
            let winHeight = window.innerHeight;
            let halfWidth = window.innerWidth / 2;
            let halfHeight = window.innerHeight / 2;
            let liWidth = $('.inter_active').width();
            let liHeight = $('.inter_active').height();
            let scaleX = halfWidth / liWidth;
            let scaleY = halfHeight / liHeight;
            let scale = Math.max(scaleX, scaleY);
            let calcY = -(winHeight / 3);
            let moveX = $('.inter_imgs_row li').width() / 2;

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.inter_imgs',
                    top: 'top top',
                    end: '+=1000',
                    pin: '.inter_imgs',
                    scrub: 0.5
                }
            })
            .to('.inter_img01_cover', {y: '-100%', duration: 0.8, ease: 'power1.inOut'}, 0)
            .fromTo('.inter_imgs_area', {scale: scale}, {scale: 1, duration: 0.8, ease: 'power1.inOut'}, 0)
            .fromTo('.inter_imgs_area', {y: calcY}, {y: 0, duration: 0.8, ease: 'power1.inOut'}, 0)
            .fromTo('.inter_imgs_area', {y: calcY}, {y: 0, duration: 0.8, ease: 'power1.inOut'}, 0)
            .to('.inter_imgs_row01', {x: moveX, duration: 0.8, ease: 'power1.inOut'}, 0)
            .to('.inter_imgs_row02', {x: -moveX, duration: 0.8, ease: 'power1.inOut'}, 0)
        }());

    });
}(jQuery));
