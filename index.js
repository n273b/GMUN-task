// Initialize Tilt.js
const tiltElements = document.querySelectorAll('[data-tilt]');
VanillaTilt.init(tiltElements, {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

const tilt = $('.js-tilt').tilt()
tilt.on('change', function(e, transforms){});


