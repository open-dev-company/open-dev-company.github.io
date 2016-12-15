

$(window).load(function () {
    var in_view = new Waypoint.Inview({
        element: $('.line-expand')[0],
        enter: function() {
            $('.line-expand').addClass('expand-down');
        },
        exit: function() {  // optionally
            $('.line-expand').removeClass('expand-down');
        }
    });
});
