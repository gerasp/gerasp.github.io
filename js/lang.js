/**
 * Created by gerardo on 03.10.16.
 */

$(function () {
    $( document ).ready(function() {
        $("h1,h2,h3,h4,h5,h6,p,a,strong,span").each(function () {
            $(this).data('english', $(this).html());
        });
    });

    $(".change-lang").click(function () {
        var langBefore = document.documentElement.lang;
        var langAfter;

        if ($(this).hasClass('change-lang-es')) {
            langAfter = "es";
        } else if ($(this).hasClass('change-lang-de')) {
            langAfter = "de";
        } else {
            langAfter = "en";
        }

        if (langBefore != langAfter) {
            if(langAfter == 'en') {
                $("h1,h2,h3,h4,h5,h6,p,a,strong,span").each(function () {
                    $(this).html($(this).data('english'));
                });
            } else if (langBefore == 'en') {
                $.getJSON('js/lang/' + langAfter + '.json', function (data) {
                    $("h1,h2,h3,h4,h5,h6,p,a,strong,span").each(function () {
                        if ($(this).text() in data.token) {
                            $(this).text(data.token[$(this).text()]);
                        }
                    })
                });
            } else {
                $("h1,h2,h3,h4,h5,h6,p,a,strong,span").each(function () {
                    $(this).html($(this).data('english'));
                });
                $.getJSON('js/lang/' + langAfter + '.json', function (data) {
                    $("h1,h2,h3,h4,h5,h6,p,a,strong,span").each(function () {
                        if ($(this).text() in data.token) {
                            $(this).text(data.token[$(this).text()]);
                        }
                    })
                });
            }
            document.documentElement.lang = langAfter;
        }
    });
});