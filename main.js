document.querySelector('.start').onclick = () => {
    const topLeft = document.querySelector('#top-left');
    const originalColor = 'border-top: 100px solid #0c9463;';
    const newColor = 'border-top: 100px solid #6decb9;';
    topLeft.style = newColor;
    setTimeout(() => {
        topLeft.style = originalColor;
    }, 1500);
}

// 1. Hacer que original color tome el color original del lugar que toco al azar
// 2. El new color tiene que estar predefinido en algun lugar
// 3. Cuando cambia al new color tiene que sombrearlo tambien (capaz hay que ponerle un clase predefinida, y despues del timeout volver a la clase por default de ese lado)