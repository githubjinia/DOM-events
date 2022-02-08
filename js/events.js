// 2nd button
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// 3rd button
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = blue;


function blue() {
    document.body.style.backgroundColor = "blue";
}

// 4th button
// anonymas function
const greenButton = document.getElementById("make-green-button");
greenButton.onclick = function () {
    document.body.style.backgroundColor = "green";
}

// 5th button
// add event listener
const goldenRod = document.getElementById('golden-rod');
goldenRod.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
}


// 6th button
const hotPink = document.getElementById('make-hotpink');
hotPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// 7th button
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = "lightblue";
})