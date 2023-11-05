// Définition de la classe DrawingCanvas
class DrawingCanvas {
    constructor(canvasId) {
        // Récupère l'élément canvas à partir de son ID
        this.canvas = document.getElementById(canvasId);
        // Récupère le contexte 2D du canvas
        this.ctx = this.canvas.getContext('2d');
        // Variable pour suivre si l'utilisateur dessine actuellement
        this.drawing = false;
        // Ajouter un écouteur d'événement pour le bouton de la souris enfoncé (mousedown)
        this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
        // Ajouter un écouteur d'événement pour le bouton de la souris relâché (mouseup)
        this.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
        // Ajouter un écouteur d'événement pour le mouvement de la souris (mousemove)
        this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));

        // Définir l'épaisseur du trait
        this.ctx.lineWidth = 5; // Vous pouvez ajuster l'épaisseur du trait
        // Définir le style de terminaison du trait
        this.ctx.lineCap = 'round';
        // Définir la couleur du trait en noir
        this.ctx.strokeStyle = 'black'; // Changer la couleur du trait en noir
        const confirmButton = document.getElementById('confirmation-canvas');
        confirmButton.disabled = true;
        this.signature = 0;
    }

    // Méthode appelée lorsqu'un bouton de la souris est enfoncé
    handleMouseDown() {
        this.drawing = true;
        this.signature ++;
        this.updateConfirmButton();
    }

    // Méthode appelée lorsqu'un bouton de la souris est relâché
    handleMouseUp() {
        this.drawing = false;
        this.signature ++;
        // Commencer un nouveau chemin de dessin
        this.ctx.beginPath();
    }

    // Méthode appelée lorsqu'il y a un mouvement de la souris
    handleMouseMove(e) {
        if (!this.drawing) return;
        // Dessiner une ligne jusqu'à la position actuelle de la souris
        this.ctx.lineTo(e.clientX - this.canvas.getBoundingClientRect().left, e.clientY - this.canvas.getBoundingClientRect().top);
        // Tracer le trait
        this.ctx.stroke();
        // Commencer un nouveau chemin de dessin
        this.ctx.beginPath();
        // Déplacer le pointeur du dessin vers la nouvelle position de la souris
        this.ctx.moveTo(e.clientX - this.canvas.getBoundingClientRect().left, e.clientY - this.canvas.getBoundingClientRect().top);
    }
    updateConfirmButton() {    
        const confirmButton = document.getElementById('confirmation-canvas');
        confirmButton.disabled = !this.drawing;
    }

}
document.getElementById('annulation-canvas').addEventListener('click', function(e) {
    var popup = document.getElementById('canvas-popup');
    var form = document.getElementById('reservation-form');
    var map = document.getElementById('map');
    map.style.pointerEvents = 'all';
    map.style.opacity = '1';
    form.style.pointerEvents = 'all';
    form.style.opacity = '1';
    popup.style.display = 'none';
});
// Créer une instance de la classe DrawingCanvas avec l'ID 'signature-canvas'
const canvasApp = new DrawingCanvas('signature-canvas');

