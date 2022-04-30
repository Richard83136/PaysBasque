/* on selectionne nos elements*/

const btnMenu= document.querySelector('.logo-menu');
const menu= document.querySelector('.liste-nav');

/* on est a l ecoute d un evenement pour le button menu et on toggle la classe active*/
btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})

/* on selectionne ensuite pour chaque lien*/
const allLinks = document.querySelectorAll('.item-nav');

/* j envoie une fonction */
allLinks.forEach(function(item){
    /* on toggle la classe active pour chaque lien */
    item.addEventListener('click', function(){
        menu.classList.toggle('active');
    })

})
document.getElementById("myBtnH").addEventListener("click", function() {
    alert("Bienvenue, vous êtes sur la page Accueil");
})
