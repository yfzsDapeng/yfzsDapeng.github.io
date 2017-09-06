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

// 关于福怡

// 公司新闻轮播图
// $(function () {
//     var $this_two = $(".companyNews_center_all_two");
//     $this_two.mouseenter(function () {
//         $this_two.animate({"right":"485px"},1000);
//     }).mouseleave(function () {
//         $this_two.animate({"right":"150px"},1000);
//     });
//
//     var $this_three = $(".companyNews_center_all_three");
//     $this_three.mouseenter(function () {
//         $this_three.animate({"right":"235px"},1000);
//     }).mouseleave(function () {
//         $this_three.animate({"right":"-100px"},1000);
//     });
//
//     var $this_four = $(".companyNews_center_all_four");
//     $this_four.mouseenter(function () {
//         $this_four.animate({"right":"0px"},1000);
//     }).mouseleave(function () {
//         $this_four.animate({"right":"-350px"},1000);
//     });
//     var $this_all = $(".companyNews_center");
//     $this_all.mouseleave(function () {
//         $this_two.animate({"right":"150px"},1000);
//         $this_three.animate({"right":"-100px"},1000);
//         $this_four.animate({"right":"-350px"},1000);
//     });
// });

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