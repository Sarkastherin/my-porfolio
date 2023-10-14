document.addEventListener("DOMContentLoaded", function() {
    var openButton = document.getElementById("open-form");
    openButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Define las dimensiones de la ventana emergente
        var width = 500;
        var height = 600;
        // Calcula la posición central de la ventana en la pantalla
        var left = (window.innerWidth - width) / 2;
        var top = (window.innerHeight - height) / 2;
        // Abre la ventana emergente con las dimensiones y la URL del formulario
        window.open(
            "https://sites.google.com/view/sarkastheri-my-form/inicio",
            "Formulario",
            "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top
        );
    });
});
// Token de acceso personal para autenticación
const accessToken = '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';

// URL de la API de GitHub para obtener tus repositorios
const apiUrl = 'https://api.github.com/user/repos';

// Encabezados para la autenticación
const headers = {
  Authorization: `token ${accessToken}`
};

// Realizar la solicitud a la API de GitHub
fetch(apiUrl, { headers })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Procesar los datos y mostrarlos en tu sitio web
    // Por ejemplo, crear una lista de proyectos en tu página web
  })
  .catch(error => {
    console.error('Error al obtener los repositorios de GitHub:', error);
  });
