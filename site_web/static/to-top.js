$(document).ready(function () {
    $(window).scroll(function () { //Fonction appelée quand on descend la page
        if ($(this).scrollTop() > 100) {  // Quand on est à 200pixels du haut de page,
            $('#scrollUp').css('right', '10px'); // Replace à 10pixels de la droite l'image
        } else {
            $('#scrollUp').removeAttr('style'); // Enlève les attributs CSS affectés par javascript
        }
    });
});