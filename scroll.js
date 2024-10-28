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
let circlebar = document.querySelector('.circlebar');

// 360개의 span 요소와 그 안에 i 태그를 추가하는 반복문
for (var i = 0; i <= 360; i++) {
    let span = document.createElement('span');
    let itag = document.createElement('i');
    span.style.setProperty('--i', i);  // 각 span에 --i 속성 설정
    span.appendChild(itag);
    circlebar.appendChild(span);
}

// 모든 i 요소 선택 (NodeList 반환)
const hoverboxes = document.querySelectorAll('i');
var i = 0;
const value = 5;

function triggerElement() {
    hoverboxes.forEach(box => box.classList.remove("hover-active"));

    hoverboxes[i].classList.add("hover-active");
    hoverboxes[i].style.setProperty('--i', i);

    i = (i + value) % hoverboxes.length;

    setTimeout(() => {
        hoverboxes[i].classList.remove("hover-active");
    }, 5000);
}

setInterval(triggerElement, 2000);
