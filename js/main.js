const menuBtn = document.querySelector('.btn__menu'),
      menuList = document.querySelector('.header__menu-list');

      menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('menu--open');
      });

      const accordeon  = document.querySelector('.accordeon'),
          accordeonBtns = accordeon.querySelectorAll('.accordeon__title');
            

            accordeonBtns.forEach.call(accordeonBtns, function(accordeonBtn){
              accordeonBtn.addEventListener('click', () => {
              const currentText = accordeonBtn.parentElement.querySelector('.accordeon__text');

              accordeonBtn.classList.toggle('accordeon__title--active');
              currentText.classList.toggle('accordeon__text--visible');

              if (currentText.classList.contains('accordeon__text--visible')){
                currentText.style.maxHeight = currentText.scrollHeight + 'px'
              }else{
                currentText.style.maxHeight = null;
              }
                
            })
            })


      let swiper = new Swiper(".mySwiper", {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      let swiperTwo = new Swiper(".certificate__slider", {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop:true,
      slidesPerView: 3,
      spaceBetween: 20,
     
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      });