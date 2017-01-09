
$(document).ready(function(){

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    /* -- text -- */
    ctx.beginPath();
    ctx.font="bold 80px Sans-serif";
    ctx.fillText("SIMPL   N.CO", 320, 300);

    /* -- shape around -- */
    ctx.beginPath();
    ctx.moveTo(260,120);
    ctx.lineTo(705,10);

    ctx.moveTo(702,10);
    ctx.lineTo(980,350);

    ctx.moveTo(980,345);
    ctx.lineTo(750,560);

    ctx.moveTo(754,559);
    ctx.lineTo(232,417);

    ctx.moveTo(235,420);
    ctx.lineTo(263,118);

    ctx.lineWidth = 8;
    ctx.stroke();

    /* -- logo -- */
    ctx.beginPath();
    ctx.arc(597,271,25,0,2*Math.PI);
    ctx.lineWidth = 9;
    ctx.strokeStyle = "#E20746";
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#E20746";
    ctx.fillRect(593, 258, 9, 9);
    ctx.fillStyle = "#E20746";
    ctx.fillRect(593, 275, 9, 9);
    ctx.closePath();

});



