$(document).on('click', 'canvas', function (click) {
    const ctx = $(this).get(0).getContext("2d");
    var x = Math.floor(click.pageX / 16);
    var y = Math.floor(click.pageY / 16);
    var up = click.pageX + click.pageY - 16 * (x + y) <= 16;
    if (up) {
        ctx.moveTo(16 * x + 1, 16 * (y + 1));
        ctx.beginPath();
        ctx.lineTo(16 * x, 16 * (y + 1));
        ctx.lineTo(16 * x, 16 * y);
        ctx.lineTo(16 * (x + 1), 16 * y);
        ctx.lineTo(16 * (x + 1), 16 * y + 1);
        ctx.moveTo(16 * x + 1, 16 * (y + 1));
    } else {
        ctx.moveTo(16 * x, 16 * (y + 1));
        ctx.beginPath();
        ctx.lineTo(16 * (x + 1), 16 * (y+ 1));
        ctx.lineTo(16 * (x + 1), 16 * y);
        ctx.lineTo(16 * x, 16 * (y + 1));
    }
    ctx.fillStyle = "green";
    ctx.fill();
});