$(document).on('click', 'canvas', function (click) {
    const ctx = $(this).get(0).getContext("2d");
    var x = Math.floor(click.pageX / 100);
    var y = Math.floor(click.pageY / 100);
    var up = click.pageX + click.pageY - 100 * (x + y) <= 100;
    console.log(x + ", " + y + "; " + up);
    ctx.moveTo(100 * x, 100 * (y + 1));
    ctx.beginPath();
    if (up) { ctx.lineTo(100 * x, 100 * y); } else { ctx.lineTo(100 * (x + 1), 100 * (y+ 1)); }
    ctx.lineTo(100 * (x + 1), 100 * y);
    ctx.lineTo(100 * x, 100 * (y + 1));
    ctx.fillStyle = "green";
    ctx.fill();
});