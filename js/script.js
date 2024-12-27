(function($) {

  "use strict";

  // Search Popup
  var searchPopup = function() {
    // open search box
    $('.user-items').on('click', '.search-button', function(e) {
      $('.search-popup').toggleClass('is-visible');
    });

    $('.user-items').on('click', '.btn-close-search', function(e) {
      $('.search-popup').toggleClass('is-visible');
    });
    
    $(".search-popup-trigger").on("click", function(b) {
        b.preventDefault();
        $(".search-popup").addClass("is-visible"),
        setTimeout(function() {
            $(".search-popup").find("#search-popup").focus()
        }, 350)
    }),
    $(".search-popup").on("click", function(b) {
        ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
        $(this).removeClass("is-visible"))
    }),
    $(document).keyup(function(b) {
        "27" === b.which && $(".search-popup").removeClass("is-visible")
    })
  }

  // Youtube Video
  $(document).ready(function() {

      // print logo
      console.log(`
        ██████╗ ██████╗ ██╗███╗   ██╗████████╗
        ██╔══██╗██╔══██╗██║████╗  ██║╚══██╔══╝
        ██████╔╝██████╔╝██║██╔██╗ ██║   ██║   
        ██╔═══╝ ██╔══██╗██║██║╚██╗██║   ██║   
        ██║     ██║  ██║██║██║ ╚████║   ██║   
        ╚═╝     ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝   ╚═╝   
    `);

  // 为所有加入购物车按钮添加点击事件
  const addToCartButtons = document.querySelectorAll('[data-after="加入购物车"]');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      flyToCart(this);
    });
  });

    const backToTop = $('#backToTop');
    
    // 监听滚动事件
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        backToTop.fadeIn();
      } else {
        backToTop.fadeOut();
      }
    });
    
    // 点击返回顶部
    backToTop.click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });

    $('#myModal').on('shown.bs.modal', function (e) {

    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })

    $('#myModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src',$videoSrc); 
    })

  });

  // Quantity Input - Cart page - Product Details pages
  function quantityInputs() {
    if ( $.fn.inputSpinner ) {
        $("input[type='number']").inputSpinner({
            decrementButton: '<span class="btn btn-dark">-</span>',
            incrementButton: '<span class="btn btn-dark">+</span>',
            groupClass: 'input-spinner',
            buttonsClass: 'btn-spinner',
            buttonsWidth: '26px'
        });
    }
  }

  // init Chocolat light box
  var initChocolat = function() {
  Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  var initSwiper = function() {

    var swiper = new Swiper(".main-slider", {
      navigation: {
        nextEl: ".slider-arrow-next",
        prevEl: ".slider-arrow-prev",
      },
      pagination: {
        el: ".main-slider-pagination",
        clickable: true,
      },
    });

    var videos_swiper = new Swiper(".videos-carousel", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".videos-carousel-button-next",
        prevEl: ".videos-carousel-button-prev",
      },
      pagination: {
        el: ".videos-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        980: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: ".products-carousel-button-next",
        prevEl: ".products-carousel-button-prev",
      },
      pagination: {
        el: ".products-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        990: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    var swiper = new Swiper(".testimonial-swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-prev",
        prevEl: ".swiper-arrow-next",
      },
      pagination: {
        el: ".testimonial-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".main-shop-slider", {
      navigation: {
        nextEl: ".main-shop-slider-arrow-next",
        prevEl: ".main-shop-slider-arrow-prev",
      },
      pagination: {
        el: ".main-shop-slider-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        990: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    var thumb_slider = new Swiper(".thumb-swiper", {
      slidesPerView: 1,
    });
    var large_slider = new Swiper(".large-swiper", {
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
    });

  }

  // Sidebar
  $(document).ready(function () {
    $('.closenav').on('click', function () {
        $('.sidenavbar').removeClass('active');
    });

    $('.btn-menu').on('click', function () {
        $('.sidenavbar').addClass('active');
    });

    searchPopup();
    initChocolat();
    initSwiper();
    quantityInputs();
  }); 

  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hide-preloader");

    // Initialize Isotope
    $('.entry-container').isotope({
      itemSelector: '.entry-item',
      layoutMode: 'masonry'
    });
    
  });

  function flyToCart(button) {
    // 获取当前商品图片
    const productImg = button.closest('.product-card').querySelector('img') || 
                      document.querySelector('.large-swiper .swiper-slide-active img');
    // 获取购物车图标
    const cart = document.querySelector('.d-flex .justify-content-end li:last-child');
    
    // 创建飞行图片
    const flyImg = productImg.cloneNode();
    flyImg.classList.add('fly-img');
    
    // 获取起始和结束位置
    const startPos = productImg.getBoundingClientRect();
    const endPos = cart.getBoundingClientRect();
    
    // 设置初始样式
    Object.assign(flyImg.style, {
      'position': 'fixed',
      'z-index': '1000',
      'left': startPos.left + 'px',
      'top': startPos.top + 'px',
      'width': '100px',
      'height': '100px',
      'object-fit': 'cover',
      'border-radius': '50%',
    });
    
    document.body.appendChild(flyImg);
    
    // 下抛物线动画
    const start = {
      x: startPos.left,
      y: startPos.top
    };
    
    const end = {
      x: endPos.left,
      y: endPos.top
    };
    
    // 控制点（抛物线底点）
    const control = {
      x: (start.x + end.x) / 2,
      y: Math.max(start.y, end.y) + 100
    };
    
    const duration = 800;
    const startTime = Date.now();
    
    function animate() {
      const progress = (Date.now() - startTime) / duration;
      
      if (progress >= 1) {
        flyImg.remove();
        cart.classList.add('cart-shake');
        setTimeout(() => cart.classList.remove('cart-shake'), 500);
        return;
      }
      
      const t = progress;
      const x = Math.pow(1 - t, 2) * start.x + 2 * (1 - t) * t * control.x + Math.pow(t, 2) * end.x;
      const y = Math.pow(1 - t, 2) * start.y + 2 * (1 - t) * t * control.y + Math.pow(t, 2) * end.y;
      
      Object.assign(flyImg.style, {
        'left': x + 'px',
        'top': y + 'px',
        'width': (100 - 50 * progress) + 'px',
        'height': (100 - 50 * progress) + 'px',
        'opacity': 1 - 0.5 * progress
      });
      
      requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
  }
})(jQuery);
