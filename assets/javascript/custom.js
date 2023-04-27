$(document).ready(function(){
    // home page slider  
    $('.slider-images').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        dots:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
    })


    // room slider
    let room_slider = $('.room-slider');

    room_slider.owlCarousel({
        items:3,
        margin:10,
        loop:true,
        responsive:{
        0:{
            items:1,
        },
        440:{
            items:2,
        },
        575:{
            items:3,
        }
    }
    })

    $('.room-slider-prev').click(function() {
        room_slider.trigger('prev.owl.carousel');
    })

    $('.room-slider-next').click(function() {
        room_slider.trigger('next.owl.carousel');
    })

    $('.custom_date').datepicker({
        dateFormat: "yy-mm-dd"
    });


    // hero slider
    let hero_slide  = $('.hero-slide');

    hero_slide.owlCarousel({
        items:1,
        margin:10,
        nav:false,
        dots:false,
    })

    $('.hero-slider-prev').click(function() {
        hero_slide.trigger('prev.owl.carousel');
    })

    $('.hero-slider-next').click(function() {
        hero_slide.trigger('next.owl.carousel');
    })


    // testimonial slider
    $('.testimonial-content').owlCarousel({
        items:2,
        margin:10,
        dots:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            440:{
                items:1,
            },
            1000:{
                items:2,
            }
        }

    })
});


    // amenity slider
    let amenity_slide  = $('.amenity-slider');

    amenity_slide.owlCarousel({
        items:4,
        margin:10,
        nav:false,
        dots:false,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2,
            },
            990:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

    $('.amenity-slider-prev').click(function() {
        amenity_slide.trigger('prev.owl.carousel');
    })

    $('.amenity-slider-next').click(function() {
        amenity_slide.trigger('next.owl.carousel');
    })


    // gallery slider
    let gallery_slide  = $('.gallery-slider');

    gallery_slide.owlCarousel({
        items:4,
        margin:10,
        nav:false,
        dots:false,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2,
            },
            990:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })


    // let data_state = $('#mobile-menu').data('state');
    //     if(data_state==0){
    //         $('#mobile-menu').attr('data-state','1');
    //     }else{
    //         $('#mobile-menu').attr('data-state','0');

    //     }


$(document).on('click','.toggle-m',function(){

    if($('#mobile-menu').hasClass('active')){
        
        $('#mobile-menu').removeClass('active');

    }else{
        $('#mobile-menu').addClass('active');
    }

})

$(document).on('click','.toggle-o',function(){

    $('#mobile-menu').removeClass('active');
})

$(document).on('click','.submit',function(){
    $('.name-error').empty();

    let _name = $('.name').val();
    let _email = $('.email').val();
    let _tel = $('.tel').val();


    if(_name==''){
        $('.name-error').html('Name is requried')

    }else if(_email==''){
        $('.email-error').html('Email is requried')

    }else if(_tel==''){
        $('.tel-error').html('Tel is requried')
        // return false;
    }else{
        // db save
        alert('saved.')
    }



})