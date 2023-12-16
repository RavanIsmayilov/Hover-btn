// document.addEventListener("DOMContentLoaded", function () {
var clickBtn = document.getElementById("Button")

// function onMouseOver(){
//     clickBtn.style.transform = 'scale(2.8)';
// }

// function onMouseOut(){
//     clickBtn.style.transform = 'scale(1.0)';
// }
// clickBtn.addEventListener("mouseover", onMouseOver)
// clickBtn.addEventListener("mouseout", onMouseOut)
// });


function onMouse(){
    if(clickBtn.style.transform === 'scale(5)'){

        clickBtn.style.transform = "scale(1)";
    }
    else{
        clickBtn.style.transform = "scale(5)";
    }
}

clickBtn.addEventListener("click", onMouse)