// Obtener elementos del DOM
const modal = document.getElementById("methodologyModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.querySelector('.modal-image');

// Mapa de las imágenes exactas según tu estructura de archivos
const imageMap = {
    'Cascada': 'cascada.png',
    'Modelo V': 'V.png',
    'Ágiles': 'agiles.png',
    'Scrum': 'scrum.png',
    'Kanban': 'kanban.png',
    'XP': 'xp.png',
    'Híbridas': 'hibrido.png'
};

// Función para abrir el modal
function openModal(methodologyName) {
    // Actualiza el título de la ventana
    modalTitle.innerText = "Vista " + methodologyName;
    
    // Asigna la ruta de la imagen local
    if (imageMap[methodologyName]) {
        modalImage.src = imageMap[methodologyName];
    } else {
        modalImage.src = ""; // Por si falta alguna imagen
        modalImage.alt = "Imagen no encontrada";
    }
    
    // Muestra el modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic en el fondo oscuro
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}