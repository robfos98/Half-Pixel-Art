$(document).ready(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    for(let x = 0; x < 10; x++) {
        for(let y = 0; y < 10; y++) {
            ctx.moveTo(100 * x, 100 * y);
            ctx.beginPath();
            ctx.lineTo(100 * (x + 1), 100 * y);
            ctx.lineTo(100 * (x + 1), 100 * (y + 1));
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.beginPath
            ctx.lineTo(100 * x, 100 * (y + 1));
            ctx.lineTo(100 * (x + 1), 100 * (y + 1));
            ctx.fillStyle = "blue";
            ctx.fill();
        }
    }
});