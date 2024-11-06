$(document).ready(function () {
    let button = $('button');
    let close = $(".close")
    let box = $(".box");

    $(button).click(function () {
        $(this).removeClass("active");
        $(box).addClass("on");
        $(box).css("visibility","visible");
    })
    $(close).click(function () {
        $(box).removeClass("on");
        $(box).css("visibility","hidden");
    })
    $("#btn1").click(function () {
        $("#box1").show();
        $("#box2").hide();
        $("#box3").hide();
        $("#box4").hide();
    })
    $("#btn2").click(function () {
        $("#box2").show();
        $("#box1").hide();
        $("#box3").hide();
        $("#box4").hide();

    })
    $("#btn3").click(function () {
        $("#box3").show();
        $("#box1").hide();
        $("#box2").hide();
        $("#box4").hide();
    })
    $("#btn4").click(function () {
        $("#box4").show();
        $("#box1").hide();
        $("#box2").hide();
        $("#box3").hide();
    })
})

window.addEventListener('focus',function () {
    const textElement = document.getElementById('.textarea');
    const marker = document.querySelector('.li');
    const boxbox = document.querySelector(".boxbox")
    const markerPosition = marker.getBoundingClientRect().boxbox;

    AnimationElment.addEventListener('animationStart', (e) =>{
        console.log('start' , e.right);
    })
    if (markerPosition <= 0) {
        textElement.textContent = '';
        text.style.opacity = '0';
    } else {
        textElement.textContent = marker;
        text.style.opacity = '1';
    }
});
