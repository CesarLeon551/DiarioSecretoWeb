let clickOrder = [];
const correctOrder = ["top-left", "top-right", "bottom-left", "bottom-right"];

document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', function() {
        const id = this.id.replace('-heart', '');
        clickOrder.push(id);

        // Verifica si el orden de clics es el correcto
        if (clickOrder.length === correctOrder.length) {
            if (JSON.stringify(clickOrder) === JSON.stringify(correctOrder)) {
                // Oculta el contenido de la página y muestra la zona secreta
                document.querySelectorAll('.interactive-item, #trigger').forEach(item => {
                    item.style.display = 'none';
                });

                // Muestra la zona secreta
                document.getElementById('secret-zone').classList.add('visible');

                // Cambia el fondo del cuerpo de la página para la zona secreta
                document.body.style.backgroundColor = '#880e4f';
            } else {
                // Si el orden es incorrecto, resetea el clickOrder
                clickOrder = [];
            }
        }
    });
});
