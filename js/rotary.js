$(function() {
    var rotateFunc = function (awards, angle, text) {  //awards:奖项，angle:奖项对应的角度
        $('#lotteryBtn').stopRotate();
        $("#lotteryBtn").rotate({
            angle: 0,
            duration: 5000,
            animateTo: angle + 1440, //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
            callback: function () {
                showAlert(awards);
            }
        });
    };

    $("#lotteryBtn").rotate({
        bind: {
            click: function () {
                var data = [1, 2, 3, 4, 5]; //返回的数组
                data = data[Math.floor(Math.random() * data.length)];
                if (data == 1) {
                    //一等奖
                    rotateFunc(1, 330)
                }
                if (data == 2) {
                    //二等奖
                    rotateFunc(2, 270)
                }
                if (data == 3) {
                    //三等奖
                    rotateFunc(3, 90)
                }
                if (data == 4) {
                    //四等奖
                    rotateFunc(4, 210)
                }
                if (data == 5) {
                    //五等奖
                    var angle = [30,150];
                    angle = angle[Math.floor(Math.random() * angle.length)];
                    rotateFunc(5, angle)
                }
            }
        }

    });
})