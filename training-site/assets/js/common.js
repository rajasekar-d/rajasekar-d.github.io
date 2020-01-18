$('a[data-toggle="pill"]').on('show.bs.tab', function (e) {
  $('.active-tab span').text(e.target.textContent);
  $('.courses-tab,.enquire-tab').slideUp();
});
$('.active-tab').click(function(){
  $('.courses-tab,.enquire-tab').slideToggle();
});

$('.form-control').change(function(){
  if(this.value){
    $(this).addClass('has-value');
  }else{
    $(this).removeClass('has-value');
  }
});

$('.study-slider,.recruiting-slider').slick({
  infinite: false,
  slidesToShow: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false
      }
    }
  ]
});

$('.courses-slider,.works-slider,.portfolio-slider').slick({
  infinite: false,
  slidesToShow: 2,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});

$('.studio-slider,.students-slider,.happy-faces-slider,.student-say-slider,.got-placed-slider,.training-slider').not('.no').slick({
  infinite: false,
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 5000,
      settings: 'unslick'
    }
  ]
});



$('.student-story-slider').slick({
  infinite: false,
  slidesToShow: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 767
    }
  ]
});

$('.student-cards-slider').slick({
  infinite: false,
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 767
    }
  ]
});

$('.announcements-slider').slick({
  infinite: false,
  slidesToShow: 1,
  dots: true,
  arrows: false
});


$('.announcemt-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.announcements-slider').slick('reinit');
});