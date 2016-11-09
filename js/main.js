$(document).ready(function(){
  // go to home page
  $('.home-btn').click(function(e){
    e.preventDefault();
    if($('.cat-bottom').is(':visible')){
      $('.map-img').attr('src', "images/map.png");
      $('.flags-img').fadeOut();
      $('.cat-bottom').fadeOut().promise().done(function(){
        $('.home-bottom').fadeIn();
      });
    }

    if($('.step-bottom').is(':visible')){
      $('.map-img').attr('src', "images/map.png");
      $('.track-img').fadeOut();
      $('.step-bottom').fadeOut().promise().done(function(){
        $('.home-bottom').fadeIn();
      });
    }

    if($('.promo-content').is(':visible')){
      $('.promo-content').fadeOut().promise().done(function(){
        $('.home-content').fadeIn();
      });
    }

    if($('.about-content').is(':visible')){
      $('.about-content').fadeOut().promise().done(function(){
        $('.home-content').fadeIn();
      });
    }



    if($('.search-content').is(':visible')){
      $('.search-content').fadeOut().promise().done(function(){
        $('.home-content').fadeIn();
      });
    }

    if($('.ad-content').is(':visible')){
      $('.ad-content').fadeOut().promise().done(function(){
        $('.home-content').fadeIn();
      });
    }
  })

  // get directory
  $('.store-btn').click(function(e){
    e.preventDefault();
    openDirectory();
  })

  $('.dining-btn').click(function(e){
    e.preventDefault();
    openDirectory();
  })

  $('.attraction-btn').click(function(e){
    e.preventDefault();
    openDirectory();
  })

  $('.directory-btn').click(function(e){
    e.preventDefault();
    $('.map-img').attr('src', "images/map-back.png");
    $('.ad-content').fadeOut().promise().done(function(){
      $('.home-content').fadeIn();
      $('.home-bottom').hide();
      $('.step-bottom').fadeIn();
      $('.track-img').fadeIn();
    });
  })

  function openDirectory(){
    $('.map-img').attr('src', "images/map-back.png");
    $('.home-bottom').fadeOut().promise().done(function(){
      $('.cat-bottom').fadeIn();
      $('.flags-img').fadeIn();
    });
  }

  // show track
  $('.flags-img').click(function(){
    $('.flags-img').fadeOut().promise().done(function(){
      $('.track-img').fadeIn();
    });
    $('.cat-bottom').fadeOut().promise().done(function(){
      $('.step-bottom').fadeIn();
    });
  })


  // go to promo page
  $('.promo-btn').click(function(e){
    e.preventDefault();
    $('.home-content').fadeOut().promise().done(function(){
      $('.promo-content').fadeIn();
    });
  })

  // go to about page
  $('.about-btn').click(function(e){
    e.preventDefault();
    $('.home-content').fadeOut().promise().done(function(){
      $('.about-content').fadeIn();
    });
  })

  $('.more .buildings-btn').click(function(e){
    e.preventDefault();
    $('.home-content').fadeOut().promise().done(function(){
      $('.about-content').fadeIn();
    });
  })

  // go to search page
  $('.search-btn').click(function(e){
    e.preventDefault();
    $('.home-content').fadeOut().promise().done(function(){
      $('.search-content').fadeIn();
    });
  })

  // go to ad page
  $('.ad').click(function(e){
    e.preventDefault();
    $('.home-content').fadeOut().promise().done(function(){
      $('.ad-content').fadeIn();
    });
  })

  $('.promo-img').click(function(e){
    e.preventDefault();
    $('.promo-content').fadeOut().promise().done(function(){
      $('.ad-content').fadeIn();
    });
  })


  // go back
  $('.back-btn').click(function(e){
    e.preventDefault();
    if($('.promo-content').is(':visible')){
      $('.promo-content').fadeOut().promise().done(function(){
        $('.home-content').fadeIn();
      });
    }

    if($('.about-content').is(':visible')){
      $('.about-content').fadeOut().promise().done(function(){
        $('.home-content').fadeIn();
      });
    }

    if($('.search-content').is(':visible')){
      $('.search-content').fadeOut().promise().done(function(){
        $('.home-content').fadeIn();
      });
    }

    if($('.cat-bottom').is(':visible')){
      $('.map-img').attr('src', "images/map.png");
      $('.flags-img').fadeOut();
      $('.cat-bottom').fadeOut().promise().done(function(){
        $('.home-bottom').fadeIn();
      });
    }

    if($('.step-bottom').is(':visible')){
      $('.track-img').fadeOut();
      $('.step-bottom').fadeOut().promise().done(function(){
        $('.cat-bottom').fadeIn();
        $('.flags-img').fadeIn();
      });
    }

    if($('.ad-content').is(':visible')){
      $('.map-img').attr('src', "images/map.png");
      $('.ad-content').fadeOut().promise().done(function(){
        $('.promo-content').fadeIn();
      });
    }
  })

  $('.roof-btn').click(function(e){
    e.preventDefault();
    if($('.home-bottom').is(':visible')){
      $('.map-img').attr('src', "images/map-roof.png");
    }else{
      $('.map-img').attr('src', "images/map-roof-back.png");
    }
  })

  $('.map .buildings-btn').click(function(e){
    e.preventDefault();
    if($('.home-bottom').is(':visible')){
      $('.map-img').attr('src', "images/map-iso.png");
    }else{
      $('.map-img').attr('src', "images/map-iso-back.png");;
    }

  })

  $('.isometric-btn').click(function(e){
    e.preventDefault();
    if($('.home-bottom').is(':visible')){
      $('.map-img').attr('src', "images/map.png");
    }else{
      $('.map-img').attr('src', "images/map-back.png");;
    }
  })

  $('.path-btn').click(function(e){
    e.preventDefault();
    if($('.home-bottom').is(':visible')){
      $('.map-img').attr('src', "images/map.png");
    }else{
      $('.map-img').attr('src', "images/map-back.png");;
    }
  })



})
