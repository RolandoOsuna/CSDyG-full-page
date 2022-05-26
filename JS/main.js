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

let titulo = document.querySelector('.titulo-esquema');
let conten = document.querySelector('.conten-esquema');
titulo.addEventListener('click', element => {
  conten.classList.toggle('transicion-esquema')
})
let titulo2 = document.querySelector('.titulo-esquema2');
let conten2 = document.querySelector('.conten-esquema2');
titulo2.addEventListener('click', element => {
  conten2.classList.toggle('transicion-esquema2')
})
let titulo3 = document.querySelector('.titulo-esquema3');
let conten3 = document.querySelector('.conten-esquema3');
titulo3.addEventListener('click', element => {
  conten3.classList.toggle('transicion-esquema3')
})
let titulo4 = document.querySelector('.titulo-esquema4');
let conten4 = document.querySelector('.conten-esquema4');
titulo4.addEventListener('click', element => {
  conten4.classList.toggle('transicion-esquema4')
})
let titulo5 = document.querySelector('.titulo-esquema5');
let conten5 = document.querySelector('.conten-esquema5');
titulo5.addEventListener('click', element => {
  conten5.classList.toggle('transicion-esquema5')
})
