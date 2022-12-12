window.onload = function() {

// $('.cartoonContainer2').hide();

// $('.cartoonContainer').on('click', function(){
//     $(".cartoon").toggle();
//     $('.cartoonContainer2').toggle();
// });

var castleWall = document.getElementById("container");
zIndex = true;
var soldierAttacking = document.getElementById('cartoon2');

var soldierWalking = document.getElementById('cartoon');

$(soldierAttacking).hide();

$('#actionButton').on('click', function(){
    $(soldierWalking).toggle(100);
    $(soldierAttacking).toggle(100);
    
    if (zIndex === true){
    castleWall.style.zIndex = 0;
    zIndex = false; } else if (zIndex === false){
    castleWall.style.zIndex = 1;
    zIndex = true;
    }
});


}