$(function () {

    $.getJSON('projects.json', function (data) {
        var items = [];

        $.each(data, function (i, val) {
            var thanks = [];
            $.each(val.thanks, function (y, thank) {
                thanks.push('<a href="https://twitter.com/' + thank + '" target="_blank">' + thank + '</a>');
            });
            items.push('<div class="col-sm-12 col-md-4"><div class="card"><div class="card-body"><h4 class="card-title">' + val.title + '</h4><h6 class="card-subtitle mb-2 text-muted">' + val.subtitle + '</h6><p class="card-text">' + val.description + '</p>' + (thanks.length > 0 ? ('<p class="card-text">thanks to ' + thanks.join(' ')) : '') + '</p><a class="card-link" target="_blank" href="' + val.url + '">Go to ' + val.title + '</a></div></div></div>');
        });

        $("<div/>", {
            class: 'row',
            html: items.join('')
        }).appendTo('#div-projects');
    });
});