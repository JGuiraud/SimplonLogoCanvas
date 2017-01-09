
// Red: #E20746
// Yellow: #FFDD00

$(document).ready(function(){

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    /* -- text Simplon -- */
   
    ctx.beginPath();
    ctx.font = "125px sans-serif";
    ctx.fillText("SIMPL   N", 270, 320);

    /* -- text Occitanie -- */
   
    ctx.beginPath();
    ctx.font="95px Sans-serif";
    ctx.fillStyle = '#E20746';
    ctx.fillText("Occitanie", 438, 400);

    /* -- YELLOW shape around -- */
    
    ctx.beginPath();
    ctx.strokeStyle = "#FFDD00";
    
    ctx.moveTo(262,150);
    ctx.lineTo(705,40);

    ctx.moveTo(704,40);
    ctx.lineTo(980,380);

    ctx.moveTo(980,377);
    ctx.lineTo(751,590);

    ctx.moveTo(754,589);
    ctx.lineTo(233,449);

    ctx.moveTo(235,450);
    ctx.lineTo(263,148);
    
    ctx.lineWidth = 4;

    ctx.stroke();
    ctx.closePath();

    /* -- RED shape around-- */
       
    ctx.beginPath();
    ctx.strokeStyle = "#E20746";
    ctx.lineWidth = 3;

    ctx.moveTo(240,180);
    ctx.lineTo(671,31);

    ctx.moveTo(670,30);
    ctx.lineTo(980,342);

    ctx.moveTo(980,340);
    ctx.lineTo(789,580);

    ctx.moveTo(790,580);
    ctx.lineTo(258,470);

    ctx.moveTo(260,470);
    ctx.lineTo(241,178);
    ctx.lineWidth = 4;

    ctx.stroke();

    /* -- logo -- */
    ctx.beginPath();
    ctx.arc(695,278,43,0,2*Math.PI);
    ctx.lineWidth = 9;
    ctx.strokeStyle = "#E20746";
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#FFDD00";
    ctx.fillRect(684, 250, 21, 21);
    ctx.fillRect(684, 285, 21, 21);

});



