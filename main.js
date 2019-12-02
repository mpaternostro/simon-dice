const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');
const corners = [topLeft, topRight, bottomLeft, bottomRight];
let chosenCorners = [];

document.querySelector('.start').onclick = () => {
    pickRandomCorner(chosenCorners);
    playSequence(chosenCorners);
}

function pickRandomCorner(chosenCorners) {
    let corner = randomCorner(corners);
    return chosenCorners.push(corner);
}

function randomCorner(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function playSequence(chosenCorners) {
    const originalColors = obtainOriginalColors(chosenCorners);
    const newColors = obtainNewColors();
    console.log(originalColors);

    chosenCorners.forEach((element, index) => {
        const corner = element.id;
        const delay = (index + 1) * 1000;
        setTimeout(() => {
            element.style['border-top-color'] = newColors[corner];
        }, delay);
        setTimeout(() => {
            element.style['border-top-color'] = originalColors[corner];
        }, delay + 1000);
    });
}

function obtainOriginalColors(chosenCorners) {
    const originalColors = [];
    chosenCorners.forEach(element => {
        const color = getComputedStyle(element)['border-top-color'];
        originalColors[element.id] = color;
    });

    return originalColors;
}

function obtainNewColors() {
    const newGreen = '#009900';
    const newRed = '#FF0000';
    const newYellow = '#FFFF00';
    const newBlue = '#0000FF';
    const newColorsPreview = [newGreen, newRed, newYellow, newBlue];

    const topLeft = document.querySelector('#top-left');
    const topRight = document.querySelector('#top-right');
    const bottomLeft = document.querySelector('#bottom-left');
    const bottomRight = document.querySelector('#bottom-right');
    const corners = [topLeft, topRight, bottomLeft, bottomRight];

    const newColors = [];
    corners.forEach((element, index) => {
        newColors[element.id] = newColorsPreview[index];
    });

    return newColors;
}