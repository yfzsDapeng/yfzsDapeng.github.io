//顶部
$(function () {
    var topWidth = $(window).width();
    if(topWidth<1200){
        $(".main_header .w").removeClass("w");
    }else{
        $(".main_header .w").addClass("w");
    }
});
// banner
$(function () {
    $(".banner").mouseenter(function () {
        $(".banner_text").fadeIn(3000);
    }).mouseleave(function () {
        $(".banner_text"). fadeOut(2000);
    })
});

// 服务项目
$(function () {
    var ourServiceWidth = $(window).width();
    if(ourServiceWidth<1200){
        $(".ourService .w").removeClass("w");
    }else{
        $(".ourService .w").addClass("w");
    }
});
