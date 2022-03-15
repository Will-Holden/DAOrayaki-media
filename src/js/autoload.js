/**
 * Add to $(document).ready()
 * Will auto load page view for each post on the page
 */
$('[id=post-view]').each(function() {
    url = 'http://127.0.0.1/count.php?action=get&slug=' + $(this).attr('data').slice(1, -1);
    var span = $(this);
    $.getJSON(url, function(data) {
        span.html(data.count);
    });
});