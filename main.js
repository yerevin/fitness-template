$(document).ready(function(){
  $('.navbar-toggle').click(function(){
    if($('#bs-example-navbar-collapse-1').hasClass('in')){
      $('.main-slogan').show();
    }
    else {
      $('.main-slogan').hide();
    }

  });
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // loop through each element
  $('.inside-text').each(function(){
    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
        reverse: false
  
    .setClassToggle(this, 'fadeInUp') 
    .addTo(controller);

  });

  // loop through each element
  $('.inside-text-2').each(function(){
    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle(this, 'fadeInUp')
    .addTo(controller);

  });

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.bg-img-3',
    reverse: false
  })
  .setClassToggle('.bg-img-3', 'slideInLeft')
  .addTo(controller);

  // build a scene
  var ourScene2 = new ScrollMagic.Scene({
    triggerElement: '.bg-img-4',
    reverse: false
  })
  .setClassToggle('.bg-img-4', 'slideInRight')
  .addTo(controller);

  // build a scene
  var ourScene3 = new ScrollMagic.Scene({
    triggerElement: '.bg-img-1',
    reverse: false
  })
  .setClassToggle('.bg-img-1', 'slideInRight')
  .addTo(controller);

  // build a scene
  var ourScene4 = new ScrollMagic.Scene({
    triggerElement: '.bg-img-2',
    reverse: false
  })
  .setClassToggle('.bg-img-2', 'slideInLeft') 
  .addTo(controller);

  // build a scene
  var ourScene5 = new ScrollMagic.Scene({
    triggerElement: '.inside-text-3',
    reverse: false
  })
  .setClassToggle('.inside-text-3', 'fadeInUp') 
  .addTo(controller);

   // build a scene
  var ourScene6 = new ScrollMagic.Scene({
    triggerElement: '.bg-img-5',
    reverse: false
  })
  .setClassToggle('.bg-img-5', 'slideInLeft')
  .addTo(controller);

  // build a scene
  var ourScene7 = new ScrollMagic.Scene({
    triggerElement: '.bg-img-6',
    reverse: false
  })
  .setClassToggle('.bg-img-6', 'slideInRight') 
  .addTo(controller);


});
