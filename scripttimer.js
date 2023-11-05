// Définition de la classe UserForm
class UserForm {
    constructor() {
        this.nomInput = document.getElementById("nom");
        this.prenomInput = document.getElementById("prenom");
        this.nomDisplay = document.getElementById("nom-display");
        this.prenomDisplay = document.getElementById("prenom-display");
        this.submitButton = document.getElementById("submit-button");
        this.confirmationButton = document.getElementById('confirmation-canvas');
        this.isButtonClickable = false;
        const storedNom = localStorage.getItem("nom");
        if (storedNom) {
            this.nomInput.value = storedNom;
        }

        const storedPrenom = localStorage.getItem("prenom");
        if (storedPrenom) {
            this.prenomInput.value = storedPrenom;
        }
        this.checkButtonState();


        this.nomInput.addEventListener("input", () => this.checkButtonState());
        this.prenomInput.addEventListener("input", () => this.checkButtonState());
        this.confirmationButton.addEventListener("click", (e) => {
            var canvas = document.getElementById('canvas-popup');
            canvas.style.display = 'none';
            this.displayUserInfo();
        });
        this.submitButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (this.isButtonClickable) {
                var form = document.getElementById('reservation-form');
                var map = document.getElementById('map');
                var canvas = document.getElementById('canvas-popup');
                canvas.style.display = 'flex';
                map.style.pointerEvents = 'none';
                map.style.opacity = '0.2';
                form.style.pointerEvents = 'none';
                form.style.opacity = '0.2';
            }
        });

    }

    checkButtonState() {
        const nom = this.nomInput.value;
        const prenom = this.prenomInput.value;
        this.isButtonClickable = nom.trim() !== "" && prenom.trim() !== "";
        this.submitButton.disabled = !this.isButtonClickable;
    }

    displayUserInfo() {
        const nom = this.nomInput.value;
        const prenom = this.prenomInput.value;
        this.nomDisplay.textContent = nom;
        this.prenomDisplay.textContent = prenom;
        localStorage.setItem("nom", nom);
        localStorage.setItem("prenom", prenom);
    }
}

const userForm = new UserForm();



document.getElementById('bouton_annuler').addEventListener('click', function() {
    location.reload();
});
