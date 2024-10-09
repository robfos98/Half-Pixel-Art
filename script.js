$(document).on('click', 'canvas', function (click) {
    const ctx = $(this).get(0).getContext("2d");
    var x = Math.floor(click.pageX / 128);
    var y = Math.floor(click.pageY / 128);
    var up = click.pageX + click.pageY - 128 * (x + y) <= 128;
    if (up) {
        ctx.moveTo(128 * x + 1, 128 * (y + 1));
        ctx.beginPath();
        ctx.lineTo(128 * x, 128 * (y + 1));
        ctx.lineTo(128 * x, 128 * y);
        ctx.lineTo(128 * (x + 1), 128 * y);
        ctx.lineTo(128 * (x + 1), 128 * y + 1);
        ctx.moveTo(128 * x + 1, 128 * (y + 1));
    } else {
        ctx.moveTo(128 * x, 128 * (y + 1));
        ctx.beginPath();
        ctx.lineTo(128 * (x + 1), 128 * (y+ 1));
        ctx.lineTo(128 * (x + 1), 128 * y);
        ctx.lineTo(128 * x, 128 * (y + 1));
    }
    ctx.fillStyle = "green";
    ctx.fill();
});