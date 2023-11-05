// Définir une classe Timer
class Timer {
    constructor(displayId, buttonId) {
        this.display = document.getElementById(displayId); // Récupère l'élément d'affichage du chronomètre par son ID
        this.button = document.getElementById(buttonId); // Récupère le bouton par son ID
        this.totalTime = 20 * 60; // 20 minutes en secondes
        this.timerInterval = null; // Initialise l'intervalle du chronomètre à null

        // Ajoute un écouteur d'événement de clic pour démarrer le chronomètre
        this.button.addEventListener("click", () => this.start());
    }

    start() {
        if (!this.timerInterval) {
            this.timerInterval = setInterval(() => this.update(), 1000); // Démarre le chronomètre en appelant la fonction update toutes les 1000 ms (1 seconde)
        }
    }

    update() {
        if (this.totalTime <= 0) {
            clearInterval(this.timerInterval); // Arrête l'intervalle du chronomètre
            this.timerInterval = null;
        } else {
            this.totalTime--; // Réduit le temps restant d'une seconde
            this.display.textContent = this.formatTime(); // Met à jour l'affichage du temps
        }
    }

    formatTime() {
        const minutes = Math.floor(this.totalTime / 60); // Calcule les minutes restantes
        const seconds = this.totalTime % 60; // Calcule les secondes restantes
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Formatte le temps au format "mm:ss"
    }
}

// Crée une instance de la classe Timer
const timer = new Timer("timer-display", "submit-button"); 
