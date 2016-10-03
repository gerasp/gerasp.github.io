/**
 * Created by gerardo on 03.10.16.
 */

$(function () {
    $(".changeLang").click(function ()
    {
        $.getJSON('js/lang/es.json', function(data) {
            $("h1,h2,h3,h4,h5,h6,p,a,strong,span").each(function ()
            {
                if ($(this).text() in data.token) {
                    $(this).text(data.token[$(this).text()]);
                }
            })
        });

    })
})