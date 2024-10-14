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
  })
  $("#btn2").click(function () {
    $("#box2").show();
    $("#box1").hide();
    $("#box3").hide();
  })
  $("#btn3").click(function () {
    $("#box3").show();
    $("#box1").hide();
    $("#box2").hide();
  })
})



let container = document.querySelector(".role");
let totalCircle = 80;
let angleStep = 360 / totalCircle;
for (let i = 0; i < totalCircle; i++){
    let circle = document.createElement("div");
    circle.classList.add("circleimg");
    let rotation = i * angleStep;
    circle.style.transform = `rotate(${rotation}deg) translate(165px)`;
    container.appendChild(circle);
}
