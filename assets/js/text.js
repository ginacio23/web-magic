
let index = 0;

let text = `Soy un apasionado del ilusionismo. Me he formado con los mayores exponentes argentinos de la magia, como asi tambien con formadores internacionales, mas precisamente de España donde tuve el placer de poder viajar para seguir formandome.


El asombro, la belleza de este hermoso arte, y la diversion son los items que me planteo al momento de pensar un show. 

Haciendo de este un momento unico e irrepetible`

let isTyping = false; // Controla si la animación ya está en curso

// Función para escribir el texto de a poco
function typeText() {
    const element = document.querySelector(".about-me__text");
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 40); // Ajusta la velocidad aquí
    }
}

// Función para verificar si el elemento está visible en la pantalla
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

// Activar la función solo cuando el elemento esté visible y no esté escribiendo ya
window.addEventListener("scroll", function() {
    const element = document.querySelector(".about-me__text");
    if (isElementInViewport(element) && !isTyping) {
        isTyping = true; // Marcar como "escribiendo"
        typeText();
    }
});

// Comprobar si el elemento es visible al recargar la página
document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector(".about-me__text");
    if (isElementInViewport(element)) {
        // Si el elemento ya está visible al cargar la página, comienza a escribir
        if (!isTyping) {
            isTyping = true;
            typeText();
        }
    }
});

function verificarVisibilidad(entries) {
    entries.forEach(entry => { // Iterar sobre cada elemento observado
        if (entry.isIntersecting) {
            console.log("El elemento se ve");
            entry.target.classList.add("colorRojo"); // entry.target es el elemento actual
        } else {
            console.log("El elemento no se ve");
            entry.target.classList.remove("colorRojo");
        }
    });
}

let observador = new IntersectionObserver(verificarVisibilidad, {})

let elements = document.querySelectorAll(".shows__type")
console.log(elements)

elements.forEach(element => observador.observe(element));