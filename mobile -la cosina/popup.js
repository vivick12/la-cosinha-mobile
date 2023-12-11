const abrirPopup = document.getElementById('abrir');
const popup = document.getElementById('popup');
const abrir = document.querySelectorAll('.abrir')
const fecharPopup = document.getElementById('Cancelar');

abrir.forEach((abre) => {
    abre.addEventListener('click', () => {
        event.preventDefault()
        popup.style.display = 'block';
    });

    fecharPopup.addEventListener('click', () => {
        event.preventDefault()
        popup.style.display = 'none';
    });




})