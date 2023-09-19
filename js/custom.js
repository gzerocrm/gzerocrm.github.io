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


