$(document).ready(function() {
    let row = $('.row');
    for(let i = 0; i < 40; i++) {
        row.clone().insertAfter(row);
    }

    $(this).scrollTop(0, 0);
});
