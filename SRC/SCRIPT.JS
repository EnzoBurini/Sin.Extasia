document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var eventContainer = document.querySelector('.event-container');
    var subliminalImage = document.querySelector('.subliminal-image');

    setInterval(function () {
        eventContainer.style.borderColor = eventContainer.style.borderColor === 'white' ? 'black' : 'white';
        subliminalImage.style.display = subliminalImage.style.display === 'none' ? 'block' : 'none';
    }, 1000); // Intervallo di 1 secondo per l'effetto stroboscopico

    var form = document.getElementById('registration-form');
    form.onsubmit = function (event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        // Qui puoi aggiungere la logica per inviare l'email e generare il QR Code
        alert('QR Code inviato a ' + email);
    };
});
