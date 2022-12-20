window.onload = function() {

// $('.cartoonContainer2').hide();

// $('.cartoonContainer').on('click', function(){
//     $(".cartoon").toggle();
//     $('.cartoonContainer2').toggle();
// });

var soldierZIndex = document.getElementById("soldierScaleControl");
zIndex = true;
var soldierAttacking = document.getElementById('cartoon2');

var soldierWalking = document.getElementById('cartoon');

$(soldierAttacking).hide();

$('#actionButton').on('click', function(){
    $(soldierWalking).toggle(50);
    $(soldierAttacking).toggle(50);
    
    if (zIndex === true){
    soldierZIndex.style.zIndex = 3;
    zIndex = false; } else if (zIndex === false){
    soldierZIndex.style.zIndex = 2;
    zIndex = true;
    }
});


}