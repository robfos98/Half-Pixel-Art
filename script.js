$(document).on('click', 'canvas', function (click) {
    const ctx = $(this).get(0).getContext("2d");
    ctx.moveTo(100 * 0, 100 * 1);
    ctx.beginPath();
    ctx.lineTo(100 * (0 + 1), 100 * 1);
    ctx.lineTo(100 * (0 + 1), 100 * (1 - 1));
    ctx.lineTo(100 * 0, 100 * 1);
    ctx.fillStyle = "green";
    ctx.fill();
    print(click.pageX);
    print(click.pageY);
});