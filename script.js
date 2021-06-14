'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//no se usa punto en las clases es decir '.hidden', es solo para el querySelector
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
//para cerrar las ventanas  y overlay necesitamos invocar una función para agregar que se oculten add.hidden

/* COPIANDO DOS CÓDIGOS IGUALES PARA HACER EL MISMO EVENTO: OCULAR OVERLAY Y VENTANA
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

//para que se oculte la ventana incluso si soo das click en overlay
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});*/

// DRY CODE DEL MISMO EVENTO

btnCloseModal.addEventListener('click', closeModal);

//para que se oculte la ventana incluso si soo das click en overlay
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden ')) {
    closeModal();
  }
});
//USAMOS EL . DESPUÉS EL NOMBRE DE LA PROPIEDAD PARA LEER CUALQUIER PROPIEDAD DE UN OBJETO
// USAMOS EL ! PARA INVERTIR EL ARGUMENTO IMPORTANT
