function toggleButton(button) {

  buttonElement = document.querySelector(button);

  if(!buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
  
  if (button === '.js-game-button') {

  if ( (document.querySelector('.js-music-button')).classList.contains('is-toggled') 
  || (document.querySelector('.js-tech-button')).classList.contains('is-toggled') ) {

    (document.querySelector('.js-music-button')).classList.remove('is-toggled');
    (document.querySelector('.js-tech-button')).classList.remove('is-toggled');
  } 
  } else if (button === '.js-music-button') {

    if ( (document.querySelector('.js-game-button')).classList.contains('is-toggled') 
    || (document.querySelector('.js-tech-button')).classList.contains('is-toggled') ) {
  
      (document.querySelector('.js-game-button')).classList.remove('is-toggled');
      (document.querySelector('.js-tech-button')).classList.remove('is-toggled');
    } 
  } else if (button === '.js-tech-button') {

    if ( (document.querySelector('.js-music-button')).classList.contains('is-toggled') 
    || (document.querySelector('.js-game-button')).classList.contains('is-toggled') ) {
  
      (document.querySelector('.js-music-button')).classList.remove('is-toggled');
      (document.querySelector('.js-game-button')).classList.remove('is-toggled');
    } 
  }

  if ((document.querySelector('.js-game-button')).classList.contains('is-toggled')
     && (document.querySelector('.js-music-button')).classList.contains('is-toggled') 
     && (document.querySelector('.js-tech-button')).classList.contains('is-toggled')) {
    
      document.querySelector('.js-edvin').innerHTML = `<img class="edvin-image" src="/images/drEDVIN.png"></img>`;

  } else if (!((document.querySelector('.js-game-button')).classList.contains('is-toggled')
      && (document.querySelector('.js-music-button')).classList.contains('is-toggled') 
      && (document.querySelector('.js-tech-button')).classList.contains('is-toggled'))) {

    document.querySelector('.js-edvin').innerHTML = '';
  }

}