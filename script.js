$(document).on('click', 'canvas', function () {
    const canvas = $(this);
    const ctx = canvas.getContext("2d");
    ctx.moveTo(100 * 0, 100 * 1);
    ctx.beginPath();
    ctx.lineTo(100 * (0 + 1), 100 * 1);
    ctx.lineTo(100 * (0 + 1), 100 * (1 - 1));
    ctx.lineTo(100 * 0, 100 * 1);
    ctx.fillStyle = "green";
    ctx.fill();
});