document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const textCarousel = document.getElementById('textCarousel');
  
    // Agregar evento de clic a cada tarjeta
    cards.forEach(card => {
      card.addEventListener('click', function () {
        alert(`Haz clic en ${this.querySelector('h2').innerText}`);
      });
    });
  
    // Carrusel de texto
    let currentIndex = 0;
  
    function showText(index) {
      textCarousel.innerHTML = `<p>${textArray[index]}</p>`;
    }
  
    function nextText() {
      currentIndex = (currentIndex + 1) % textArray.length;
      showText(currentIndex);
    }
  
    setInterval(nextText, 9000); // Cambia el texto cada 3 segundos
  
    // Inicializar el carrusel de texto
    showText(currentIndex);
  });
  
  const textArray = ['la distribución de soluciones de software es la migración a un modelo de suscripciones.', 'incremento en la cantidad de opciones disponibles de software, que exige una mayor especialización técnica y consultiva de los canales, y que obliga a plantear relaciones estratégicas con los usuarios finales.', 'la planeación y actualización continúa de las implicaciones que proveer software a través de sistemas como la nube'];