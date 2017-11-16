$(function(){
    perTime = 1000;
    reScale();
    initAlert();
    initPageShow();

    $(window).resize(function(){
        reScale()
    });
});

function reScale(){
    var preW = 400;
    var screenW = $('.page').width();

    var scale = screenW / preW;
    if(scale > 1.6){
        scale = 1.6;
    }
    if(scale < 0.75){
        scale = 0.75;
    }
    $('.scale-box').css('-webkit-transform','scale('+scale+')')
        .css('-moz-transform','scale('+scale+')')
        .css('-ms-transform','scale('+scale+')')
        .css('-o-transform','scale('+scale+')')
        .css('transform','scale('+scale+')');
}

function initPageShow(){
    setPage1();
    setTimeout(function(){
        setPage2();
    },3.5*perTime);

    $('.page-2 .btn').click(function(){
        hidePage(2);
        showPage(3);
    });

    $('.btn[data-type]').click(function(){
        var btnType = $(this).data('type');
        var currentPage = $(this).data('page'),
            targetPage = $(this).data('target');

        hidePage(currentPage);
        showPage(targetPage);
        $('.page-'+targetPage+' .arrow').unbind('click').click(function(){
            hidePage(targetPage);
            if(btnType=='pre-btn'){
                showPage(currentPage);
            }
            if(btnType=='next-btn'){
                showPage( parseInt(targetPage) + 1 );
            }
        });
    });

    $('.page-9 .next-btn').click(function(){
        hidePage(9);
        showPage(10);
    });

    $('.page-10 .J-share-btn').click(function(){
        $('.page-10 .share-box').show();

        //暂时测试
        $('.page-10 .share-box .arrow').click(function(){
            showRotary();
        });
    });
}

function setPage1(){
    showPage(1);
    setTimeout(function(){
        $('.page-1 .text-1').addClass('animated fadeInLeft');
    },perTime);
    setTimeout(function(){
        $('.page-1 .text-2').addClass('animated fadeInRight');
    },2*perTime);
    setTimeout(function(){
        hidePage(1);
    },3.3*perTime);
}

function hidePage(index){
    if(index == 0){
        $('.animated').removeClass('animated');
    }else{
        var pageObj = $('.page-'+index);
        var inStyle = pageObj.data('in'),
            outStyle = pageObj.data('out');
        pageObj.removeClass('animated ' + inStyle + ' ' + outStyle)
            .addClass('animated ' + outStyle);
    }
}

function showPage(index){
    var pageObj = $('.page-'+index);
    var inStyle = pageObj.data('in'),
        outStyle = pageObj.data('out');
    pageObj.removeClass('animated ' + inStyle + ' ' + outStyle)
        .addClass('animated ' + inStyle);
}

function setPage2(){
    showPage(2);
    setTimeout(function(){
        /* 这是一条需要你慢慢品尝的火腿 */
        $('.page-2 .text-1').addClass('animated fadeInDown');
    },0);
    setTimeout(function(){
        /* 它舞动着西班牙热烈的风情 */
        $('.page-2 .text-2').addClass('animated fadeInDown');
    },perTime);
    setTimeout(function(){
        /* 它采撷东方之国浓厚的灵气 */
        $('.page-2 .text-3').addClass('animated fadeInUp');
    },2*perTime);
    setTimeout(function(){
        /* 中西结合 */
        $('.page-2 .text-4').addClass('animated fadeInLeft');
    },3*perTime);
    setTimeout(function(){
        /* 时光雕琢 */
        $('.page-2 .text-5').addClass('animated fadeInRight');
    },3*perTime);
    setTimeout(function(){
        /* 自成一方世界 */
        $('.page-2 .text-6').addClass('animated fadeIn');
    },4*perTime);
    setTimeout(function(){
        /* 这个世界走得是越来越快 忙着向前 */
        $('.page-2 .text-7').addClass('animated fadeInUp');
    },5*perTime);
    setTimeout(function(){
        /* 忙着忙着 就再也慢不下来 随波逐流 */
        $('.page-2 .text-8').addClass('animated fadeInDown');
    },6*perTime);
    setTimeout(function(){
        /* 忙着生活 */
        $('.page-2 .text-9').addClass('animated fadeInLeft');
    },7*perTime);
    setTimeout(function(){
        /* 忙着一切 */
        $('.page-2 .text-10').addClass('animated fadeInLeft');
    },7*perTime);
    setTimeout(function(){
        /* 但慢下来 */
        $('.page-2 .text-11').addClass('animated fadeInRight');
    },8*perTime);
    setTimeout(function(){
        /* 才是人生 */
        $('.page-2 .text-12').addClass('animated fadeInRight');
    },8*perTime);
    setTimeout(function(){
        /* 天福号农庄专注慢手艺 */
        $('.page-2 .text-13').addClass('animated fadeInDown');
    },9*perTime);
    setTimeout(function(){
        /* 为你雕琢一款匠心好火腿 */
        $('.page-2 .text-14').addClass('animated rotateInDownLeft');
    },10*perTime);
    setTimeout(function(){
        $('.page-2 .huotui-small').addClass('animated fadeIn');
        setTimeout(function(){
            $('.page-2 .btn').addClass('animated');
        },500);
    },10*perTime+800);

}

function initAlert(){
    $('.J-close').click(function(){
        $('.J-alert-box').hide();
    })
}

function showAlert(index){
    $('.J-alert-box .alert').hide();
    if([1,2,3,4,5].indexOf(index) > -1){
        $('.J-alert-box .alert-'+index).show();
    }else{
        $('.J-alert-box .alert-0 .desc').html(index);
        $('.J-alert-box .alert-0').show();
    }
    $('.J-alert-box').show();
}

function showSharePage(){
    clearAnimate();
    $('.page-10').addClass('current-show');
}

function showRotary(){
    clearAnimate();
    $('.page-11').addClass('current-show');
}

function clearAnimate(){
    $('.animated').removeClass('animated fadeOutLeft fadeOutUp current-show');
}
