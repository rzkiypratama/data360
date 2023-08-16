$(document).ready(function () {
  pano.on('changenode', function(){
    animatehotspot()
  })
  console.log('asdfjal')
});


function desc() {
  Swal.fire({
    title: pano.getVariableValue('title'),
    text: pano.getVariableValue('desc')
  })
}

function animatehotspot() {
  anime({
    targets: '.anime',
    scale: [1, 1.5],
    opacity: [1, 0],
    // rotateX: [75, 75],
    // direction: 'alternate',
    loop: true,
    // delay: 300,
    endDelay: 300,
    duration: 900,
    easing: 'easeInOutQuad'
  })
}