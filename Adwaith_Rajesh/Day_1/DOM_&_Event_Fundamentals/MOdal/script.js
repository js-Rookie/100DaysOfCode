'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); //It outputs the element as like an array

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener(
    'click',
    openModal
    // console.log(btnOpenModal[i].textContent);
    // modal.classList.remove('hidden'); //do not use dot..dot is only for selection
    // overlay.classList.remove('hidden');
    // OR ANother way is
    // modal.style.display = 'block';
    // overlay.style.display = 'block';
  );
}

// btnCloseModal.addEventListener('click', () => {
//   closeModal();
//   //   OR
//   //   modal.style.display = 'none';
//   //   overlay.style.display = 'none';
// });

// --------------OR--------We can use-------------

btnCloseModal.addEventListener('click', closeModal); //Here we are not calling the function closeModal() because as the javascript engine sees () it will immediately call the functio and that is not the way we wanted

overlay.addEventListener('click', closeModal);

// KeyboardEvents are also called global events thaey do not happen on single events.Here we usually listen on wholeevents.

// keyboard events(MainEvents are: keyDown,keyPressor keyUp)

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //aggregated two if together
    closeModal();
  }
});
