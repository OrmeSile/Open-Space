const checkboxes = document.querySelectorAll("div.check-buttons input");
const sliders = document.querySelectorAll("div.levers input");
const launchButton = document.getElementById("launch");
const passwordOkButton = document.querySelector("div.control-panel__inner input[type ='button']");
const passwordField = document.querySelector("div.control-panel__inner input[type='password']");
let slidersArray = Array.from(sliders);
let checkboxesArray = Array.from(checkboxes);
let spaceShip = document.querySelector(".rocket");

launchButton.disabled = true;
checkboxesArray.forEach(checkBox=>{
    checkBox.checked = false;
    checkBox.disabled = true;
})
slidersArray.forEach(slider =>{
    slider.value=0;
    slider.disabled = true;
})
passwordOkButton.addEventListener("click", function(){
    let passwordCheck = passwordField.value === "TrustNo1";
    if(passwordCheck){
        checkboxesArray.forEach(checkBox=>{
            checkBox.disabled = false;
        })
        slidersArray.forEach(slider =>{
            slider.disabled = false;
        })
        passwordField.disabled = true;
        passwordOkButton.disabled = true;
    }
});
/*slidersArray.forEach(slider =>{
    slider.addEventListener("change", function (){
        if(everythingOn()){
            launchButton.disabled = false;
        }else{
            launchButton.disabled = true;
        }
    })
});

checkboxesArray.forEach(checkbox=>{
    checkbox.addEventListener("change", function (){
        if(everythingOn()){
            launchButton.disabled = false;
        }
    })
});*/

launchButton.addEventListener("click", function (){
    setInterval(moveSpaceship, 20);
})

function checkAllSlidersOn(){
    let totalOn = 0;
    slidersArray.forEach(slider=>{
        if(slider.value==100){
            totalOn++;
        }
    });
    return totalOn === 5;
}

function checkAllCheckboxesOn(){
    let totalOn = 0;
    checkboxesArray.forEach(checkbox=>{
        if(checkbox.checked==true){
            totalOn++;
        }
    });
    return totalOn === 6;

}
function moveSpaceship(){
    spaceShip.style.transform += 'translateX(1%)';
    spaceShip.style.transform += 'translateY(-10%)';
}
function everythingOn(){
    let value = checkAllCheckboxesOn() && checkAllSlidersOn();
    if (value){
        launchButton.disabled = false;
}

}

