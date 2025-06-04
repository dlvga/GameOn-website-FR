// Select the form using a generic selector
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form default submission

    // Clear previous error states
    document.querySelectorAll('.formData[data-error-visible="true"]').forEach(el => {
        el.removeAttribute('data-error-visible');
        el.removeAttribute('data-error');
    });

    const formData = new FormData(this);

    const errorMessages = new Map();

    // Validate first name
    const firstName = formData.get('first-name');
    if (!firstName || firstName.length < 2) {
        errorMessages.set('first-name','Le champ Prénom doit avoir un minimum de 2 caractères.');
    }

    // Validate last name
    const lastName = formData.get('last-name');
    if (!lastName || lastName.length < 2) {
        errorMessages.set('last-name','Le champ Nom doit avoir un minimum de 2 caractères.');
    }

    // Validate email
    const email = formData.get('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        errorMessages.set('email','L\'adresse électronique n\'est pas valide.');
    }

    // Validate birthdate
    const birthdate = formData.get('birthdate');
    if (!birthdate) {
        errorMessages.set('birthdate', 'Veuillez sélectionner votre date de naissance.');
    }

    // Validate tournament quantity
    const quantity = formData.get('quantity');
    if (!quantity || isNaN(quantity) || quantity < 0) {
        errorMessages.set('quantity','Le nombre de tournois doit être une valeur numérique positive.');
    }

    // Validate radio button selection
    const location = formData.get('location');
    if (!location) {
        errorMessages.set('location','Vous devez sélectionner un bouton radio pour le tournoi.');
    }

    // Validate terms checkbox
    const acceptTermsOfUse = formData.get('acceptTermsOfUse');
    if (!acceptTermsOfUse) {
        errorMessages.set('acceptTermsOfUse','Vous devez accepter les conditions générales.');
    }

    // Display error messages if any
    if (errorMessages.size > 0) {
        errorMessages.forEach((message, fieldName) => {
            // Standard handling for text fields
            const input = document.querySelector(`[name="${fieldName}"]`);
            if (input) {
                const formDataDiv = input.closest('.formData');
                if (formDataDiv) {
                    formDataDiv.setAttribute('data-error', message);
                    formDataDiv.setAttribute('data-error-visible', 'true');
                }
            }
        });
    } else {
        const modalWelcome = document.querySelector('.modal--confirm');
        const modalSignUp = document.querySelector('.modal--signUp');
        modalWelcome.style.display = 'block';
        modalSignUp.style.display = 'none';
    }
});