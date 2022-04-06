// Récupération des éléments principaux
const agendaTable = document.getElementById('agenda-table');
const subscribeForm = document.getElementById('inscription-form');

// Gestion du clic sur la table des formations pour mettre la date automatiquement
agendaTable.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        // Mettre le focus dans le formulaire
        document.getElementById('name-input').focus();

        // Récupération de la ligne du tableau
        const row = event.target.closest('tr');
        const selectedDate = row.dataset.date;

        // Choisir directement la bonne date
        document.getElementById('date-input').value = selectedDate;
    }
});

// Ajout de la class "touched" une fois qu'un champ de formulaire a été modifié
subscribeForm.addEventListener('keyup', function(event) {
    event.target.classList.add('touched');
});