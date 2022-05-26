const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();
// CLICK
 let titulo = document.querySelector('.titulo-esquema');
 let conten = document.querySelector('.conten-esquema');
 titulo.addEventListener('click', element => {
   conten.classList.toggle('transicion-esquema')
 });
 let titulo2 = document.querySelector('.titulo-esquema2');
 let conten2 = document.querySelector('.conten-esquema2');
 titulo2.addEventListener('click', element => {
   conten2.classList.toggle('transicion-esquema2')
 });
 let titulo3 = document.querySelector('.titulo-esquema3');
 let conten3 = document.querySelector('.conten-esquema3');
 titulo3.addEventListener('click', element => {
   conten3.classList.toggle('transicion-esquema3')
 });
 let titulo4 = document.querySelector('.titulo-esquema4');
 let conten4 = document.querySelector('.conten-esquema4');
 titulo4.addEventListener('click', element => {
   conten4.classList.toggle('transicion-esquema4')
 });
 let titulo5 = document.querySelector('.titulo-esquema5');
 let conten5 = document.querySelector('.conten-esquema5');
 titulo5.addEventListener('click', element => {
   conten5.classList.toggle('transicion-esquema5')
 });
// TRANSICION SCROLL
const planeacion = document.getElementById('planeacion');
const alcance = document.getElementById('alcance');
const enfoque = document.getElementById('enfoque');
const organizacion = document.getElementById('organizacion');
const crecimiento = document.getElementById('crecimiento');

const cargarContenido = (entradas, observador) => {
	// console.log(entradas)
	// console.log(observador)

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			// entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarContenido, {
	root: null,
	rootMargin: '500px 0px 100px 0px',
	threshold: 1.0
});

observador.observe(planeacion);
observador.observe(alcance);
observador.observe(enfoque);
observador.observe(organizacion);
observador.observe(crecimiento);
