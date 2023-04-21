document.querySelector("button");

function random(number){
    return Math.floor(Math.random()*(number + 1));
}


function changecolor(){
    let color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = color;
}

