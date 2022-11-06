$(document).ready(function($) {

// -------------------------------- 스크롤 모션
    AOS.init();

// -------------------------------- 상단바
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function(event){
didScroll = true;
});
setInterval(function() {
if (didScroll) {
    hasScrolled();
    didScroll = false;
}
}, 250);
function hasScrolled() {
var st = $(this).scrollTop();
if(Math.abs(lastScrollTop - st) <= delta)
    return;
if (st > lastScrollTop && st > navbarHeight){
    $('header').removeClass('nav-down').addClass('nav-up');
} else {
    if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
    }
}
lastScrollTop = st;
}
$(".scroll_move").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500,'swing');
});



// -------------------------------- 스크롤 감지&CSS
$(window).scroll(function () {
        var height = $(document).scrollTop();   
        console.log(height);

        if (height > 21007 ){
            $('.community_feed_sticker02').animate({
                rotate:"20deg"
            }, 300 );
        };
        if (height > 21542 ){
            $('.community_feed_sticker01').animate({
                rotate:"-20deg"
            }, 200 );
        };
        }); 
});



// -------------------------------- 이미지 롤링
const container = document.querySelector('.images-line')
const basis = container.querySelectorAll('.rolling-image').length || 0

function rolling (loop) {
  if (container) {
    const imageList = container.querySelectorAll('.rolling-image')
    const basicWidth = imageList[0].offsetWidth + parseInt(getComputedStyle(imageList[0]).marginLeft) + parseInt(getComputedStyle(imageList[0]).marginRight)

    let translation = 0
      
    if (!loop) {
      if (imageList && imageList.length !== 0) {
        const urlList = []
        imageList.forEach(image => {
          urlList.push(image.src)
        })

        urlList.forEach((url, i) => {
          const image = document.createElement('img')
          image.classList.add('rolling-image')
          image.src = urlList[i]
          image.alt = imageList[i].alt

          container.append(image)

          if (i < urlList.length / 2) {
             translation -= basicWidth
          }
        })

        container.classList.add('rolling')
        container.style.transform = `translateX(${translation}px)`
        container.style.transition = 'transform 30s linear'

        setInterval(() => {
          container.style.transform = 'translateX(0)'
          container.style.transition = 'none'
          
          rolling(true)
        }, 6000)
      }
    } else {
      if (imageList && imageList.length !== 0) {
        const urlList = [] 
        imageList.forEach(image => {
          urlList.push(image.src)
        })

        urlList.forEach((url, i) => {
          if (i < urlList.length / 2) {
            if (i < urlList.length / 4) {
              translation -= basicWidth
            }
          }
        })
        
        container.style.transform = `translateX(${translation}px)`
        container.style.transition = 'transform 30s linear'

        setInterval(() => {
          container.style.transform = 'translateX(0)'
          container.style.transition = 'none'
          
          rolling(true)
        }, 6000)
      }
    }
    
    return
  }
  
  return
}

window.addEventListener('load', rolling(false))

