document.addEventListener('DOMContentLoaded', () => {
    // Cargar el navbar
    fetch('../navbar/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el navbar');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbarContainer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });

  
});