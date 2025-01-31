
$(document).ready(function() {
    let firstCard = null;
    let secondCard = null;
    let canFlip = true;

    $('.card').click(function () {
        debugger;
        if (!canFlip) return;
        if ($(this).hasClass('flipped') || $(this).hasClass('matched')) return;

        $(this).addClass('flipped');
        $(this).find('label').show();
        $(this).find('span').show();

        if (!firstCard) {
            firstCard = $(this);
        } else {
            secondCard = $(this);
            canFlip = false;
            
            fn_ComprobarCoincidencia();
        }
    });

    function fn_ComprobarCoincidencia() {
        const firstValue = firstCard.data('card-id');
        const secondValue = secondCard.data('card-id');

        if (firstValue === secondValue) {
            firstCard.addClass('matched');
            secondCard.addClass('matched');
            fn_RestablecerTarjetas();
            fn_TarjetasCompletados();
        } else {
            setTimeout(function() {
                firstCard.removeClass('flipped');
                secondCard.removeClass('flipped');
                firstCard.find('label').hide();
                secondCard.find('label').hide();
                firstCard.find('span').hide();
                secondCard.find('span').hide();
                fn_RestablecerTarjetas();
            }, 1000);
        }
    }

    function fn_RestablecerTarjetas() {
        firstCard = null;
        secondCard = null;
        canFlip = true;
    }

    function fn_TarjetasCompletados() {
        if ($('.matched').length === $('.card').length) {
            setTimeout(function() {
                alert('¡Felicitaciones! Has ganado el juego.');
            }, 500);
        }
    }
});

function fn_reiniciarJuego() {
    debugger;
    $('.card').removeClass('flipped matched');
    $('.card label').hide();
}