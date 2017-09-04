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
        $(".banner_text").fadeIn(2000);
    }).mouseleave(function () {
        $(".banner_text"). fadeOut(2000);
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

// 走进福怡



// 公司新闻轮播图
// $('.accordion>li').on('mouseenter', function () {
//     _this = $(this);
//     $(this).siblings().stop().animate({'width':288,'opacity':0.3},800).end().stop().animate({'width':864,'opacity':1},800);
//     $('.accordion img').removeClass('accordion_active');
//     $(this).find('img').addClass('accordion_active');
//     $('.accordion img').each(function (index,ele) {
//         if($(ele).hasClass('accordion_active')){
//             $(this).stop().animate({'left':-0,'zIndex':1},800);
//             $(this).parent().next().stop().animate({'paddingLeft':100});
//         }else{
//             $(this).stop().animate({'left':-288,'zIndex':0},800);
//             $(this).parent().next().stop().animate({'paddingLeft':30});
//         }
//     })
// })
// $('.accordion>li').eq(1).css('width',864).triggerHandler("mouseenter");

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