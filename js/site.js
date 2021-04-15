$(function () {

  $.getJSON('/projects.json', function (data) {
    var items = [];

    $.each(data, function (i, val) {
      var thanks = [];
      $.each(val.thanks, function (y, thank) {
        thanks.push('<a href="https://twitter.com/' + thank + '" target="_blank">' + thank + '</a>');
      });
      var card_html =
        '<div class="col-sm-12 col-md-4">' +
        '<div class="card mb-3">' +
        '<img class="card-img-top" style="height: 100%" src="/images/' + val.image + '.png" alt="' + val.title + '">' +
        '<div class="card-body">' +
        '<h4 class="card-title">' + val.title + '</h4> ' +
        '<h6 class="card-subtitle text-muted">' + val.description + '</h6>' +
        '<a class="card-link" href="' + val.url + '" target="_blank">Webpage</a>' +
        '<a class="card-link" href="https://github.com/librarieshacked/' + val.github + '" target="_blank">Code</a>' +
        '</div>' +
        '<div class="card-footer text-muted">' +
        (thanks.length > 0 ? ('thanks to ' + thanks.join(' ')) : '') +
        '</div >' +
        '</div>' +
        '</div>';
      items.push(card_html);
    });

    $("<div/>", {
      class: 'row',
      html: items.join('')
    }).appendTo('#div-projects');
  });
});