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
        $(".banner_text").fadeToggle(3000);
    }).mouseleave(function () {
        $(".banner_text").fadeToggle(3000);
    })
});

// 我们的服务
$(function () {
    var ourServiceWidth = $(window).width();
    if(ourServiceWidth<1200){
        $(".ourService .w").removeClass("w");
    }else{
        $(".ourService .w").addClass("w");
    }
});

// 我们的产品
$(function () {
    $(".ourProducts_tab li").mouseenter(function () {
        $(this).addClass('border_bn').siblings().removeClass("border_bn");
    })
});

// 常见问题
$(function () {
    $(".chanping").click(function () {
        $(".chanpingT").slideToggle("slow");
    });
    $(".fangan").click(function () {
        $(".fanganT").slideToggle("slow");
    });
    $(".chuli").click(function () {
        $(".chuliT").slideToggle("slow");
    });
    $(".wenti").click(function () {
        $(".wentiT").slideToggle("slow");
    });
    $(".fangshi").click(function () {
        $(".fangshiT").slideToggle("slow");
    });
});