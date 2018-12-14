$(function () {
    var DH=document.documentElement.clientHeight,DW=document.documentElement.clientWidth;
    $(".sky1").css({
        "height":DH+"px"
    });
    $(".sky3").css({
        "height":DH+"px"
    });
    $(".sky2").css({
        "height":DH*0.7+"px"
    });
    var ImgItems={
        rdImgSize:4,
        rdImgPL:0,
        rdImgPT:0,
        rdImg:0,
        rdImgItems:"",
        rdImgWidthMin:200,
        rdImgWidthMax:500,
        rdImgSpeed:0.2,
        rdImgMinSpeed:0.1
    };
    for (var i=0;i<=ImgItems.rdImgSize;i++){
        ImgItems.rdImg=parseInt(Math.random()*(ImgItems.rdImgSize)+1);
        ImgItems.rdImgItems="images/skyss"+ImgItems.rdImg+".png";
        $(".sky2").append("<img src="+ImgItems.rdImgItems+" />");
    }
    var itSpeed=0;
    $(".sky2 img").each(function (index) {
        ImgItems.rdImgPL=Math.random()*(DW-$(".sky2 p img").width());
        ImgItems.rdImgPT=Math.random()*$(".sky2").height();
        ImgItems.rdImgW=Math.random()*ImgItems.rdImgWidthMax+ImgItems.rdImgWidthMin;
        $(this).css({
            "top":ImgItems.rdImgPT+"px",
            "left":ImgItems.rdImgPL+"px",
            "width":ImgItems.rdImgW+"px"
        });
        itSpeed=Math.random()*ImgItems.rdImgSpeed+ImgItems.rdImgMinSpeed;
        $(this).attr("speedItems",itSpeed)
    });
    var speed=0;
    setInterval(function () {
        $(".sky2 img").each(function (index) {
            speed=parseFloat($(this).attr("speedItems"));
            var itemsLeft=$(this).offset().left;
            $(this).css({
                "left":itemsLeft+speed+"px"
            });
            if ($(this).offset().left>=DW){
                $(this).remove()
            }
            if ($(".sky2 img").size()<=ImgItems.rdImgSize){
                ImgItems.rdImg=parseInt(Math.random()*(ImgItems.rdImgSize)+1);
                ImgItems.rdImgItems="images/skyss"+ImgItems.rdImg+".png";
                $(".sky2").append("<img src="+ImgItems.rdImgItems+" />");
                ImgItems.rdImgPT=Math.random()*$(".sky2").height();
                ImgItems.rdImgW=Math.random()*ImgItems.rdImgWidthMax+ImgItems.rdImgWidthMin;
                $(".sky2 img").last().css({
                    "top":ImgItems.rdImgPT+"px",
                    "width":ImgItems.rdImgW+"px",
                    "left":-ImgItems.rdImgW+"px"
                });
                itSpeed=Math.random()*ImgItems.rdImgSpeed+ImgItems.rdImgMinSpeed;
                $(".sky2 img").last().attr("speedItems",itSpeed)
            }
        })
    },10);
});