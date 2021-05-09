// Set active link style based on path

let href = window.location.href;

$('#links a').each(function() {
    if(this.href === href) {
        $(this).addClass('active');
    }
});


if(window.location.pathname == '/') {
    $('body').css('overflow', 'hidden');
}