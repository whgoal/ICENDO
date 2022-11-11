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

