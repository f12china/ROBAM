function djs() {
    let date = new Date();
    let count = new Date('2019-8-8 00:00:00');
    let day = parseInt(((count - date) / 1000) / 86400);
    let hour = parseInt(((count - date) / 1000) % 86400 / 3600);
    let minute = parseInt(((count - date) / 1000) % 3600 / 60);
    let second = parseInt(((count - date) / 1000) % 60);
    $('.int_days').html(day);
    $('.int_hours').html(hour);
    $('.int_minutes').html(minute);
    $('.int_seconds').html(second);
    // console.log($('.int_days').html())
}
setInterval(djs, 1000);