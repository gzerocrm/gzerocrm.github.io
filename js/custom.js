// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');
        const data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    const $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// block select last date
$(function () {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;

    $('#date').attr('min', minDate);
});


let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let hour = 1;
let counter = document.getElementById("counter");

function increment() {
    if (hour < 23) {
        hour++;
        counter.innerHTML = hour;
    }
}

function decrement() {
    if (hour > 1) {
        hour--;
        counter.innerHTML = hour;
    }
}

let room = document.getElementById("room");
let shm8 = document.getElementById("shm8");
let shm10 = document.getElementById("shm10");
let shm16 = document.getElementById("shm16");
let shz = document.getElementById("shz");
let mm10 = document.getElementById("mm10");
let mz = document.getElementById("mz");
let me = document.getElementById("me");
let km6 = document.getElementById("km6");
let km8 = document.getElementById("km8");
let km10 = document.getElementById("km10");
let km12 = document.getElementById("km12");
let kz = document.getElementById("kz");
let ke = document.getElementById("ke");
let komnata = '';
let filial = '';
let roomid = '';


shm8.addEventListener('click', function (e) {
    filial = 3
    roomid = 17
    komnata = "Sharq - miting room (8 persons)"
    room.innerHTML = komnata
    tg.MainButton.show();
})
shm10.addEventListener('click', function (e) {
    filial = 3
    roomid = 12
    komnata = "Sharq - miting room (10 persons)"
    room.innerHTML = komnata
})
shm16.addEventListener('click', function (e) {
    filial = 3
    roomid = 11

    komnata = "Sharq - miting room (16 persons)"
    room.innerHTML = komnata
})
shz.addEventListener('click', function (e) {
    filial = 3
    roomid = 1
    komnata = "Sharq - zoom room (1 person)"
    room.innerHTML = komnata
})
mm10.addEventListener('click', function (e) {
    filial = 5
    roomid = 12
    komnata = "Minor - miting room (10 persons)"
    room.innerHTML = komnata
})
mz.addEventListener('click', function (e) {
    filial = 5
    roomid = 1
    komnata = "Minor - zoom room (1 person)"
    room.innerHTML = komnata
})
me.addEventListener('click', function (e) {
    filial = 5
    roomid = 5
    komnata = "Minor - event room (70 persons)"
    room.innerHTML = komnata
})
km6.addEventListener('click', function (e) {
    filial = 4
    roomid = 18
    komnata = "Kitoblar - miting room (6 persons)"
    room.innerHTML = komnata
})
km8.addEventListener('click', function (e) {
    filial = 4
    roomid = 17
    komnata = "Kitoblar - miting room (8 persons)"
    room.innerHTML = komnata
})
km10.addEventListener('click', function (e) {
    filial = 4
    roomid = 12
    komnata = "Kitoblar - miting room (10 persons)"
    room.innerHTML = komnata
})
km12.addEventListener('click', function (e) {
    filial = 4
    roomid = 19
    komnata = "Kitoblar - miting room (12 persons)"
    room.innerHTML = komnata
})
kz.addEventListener('click', function (e) {
    filial = 4
    roomid = 1
    komnata = "Kitoblar - zoom room (1 person)"
    room.innerHTML = komnata
})
ke.addEventListener('click', function (e) {
    filial = 4
    roomid = 5
    komnata = "Kitoblar - event room (60 persons)"
    room.innerHTML = komnata
})

let input = document.getElementById("input");
let submit = document.getElementById("submit");

input.addEventListener("input", function () {
    localStorage.setItem("data", input.value);
});

// if (localStorage.getItem("data")) {
//     input.value = localStorage.getItem("data");
// }
//
// window.addEventListener("beforeunload", function () {
//     localStorage.removeItem("data");
// });

// Telegram.WebApp.onEvent('mainButtonClicked', function () {
//     tg.sendData(roomid + "_" + hour + "_" + input.value + "_" + filial);
// });

submit.addEventListener("input", function () {
    tg.sendData(roomid + "_" + hour + "_" + input.value + "_" + filial);
});
