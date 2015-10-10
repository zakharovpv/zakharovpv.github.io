$(document).ready(function() {

	$('#fullpage').fullpage({

	  scrollingSpeed: 700,
	 	verticalCentered: false,
	 	anchors:['0', '1', '2', '3', '4', '5'],
	 	menu: '#menu',

	  onLeave: function(index, nextIndex, direction){
	    //leaving 1st section
	    if(index == 1){
	    	$('#header').hide();
	      $('#header').addClass('new_header').removeClass('header');
	      $('#header').addClass('shadow_for_header');
	      $('.nav_li_a').addClass('new_navigation').removeClass('navigation');
	      $('#phone_icon').addClass('new_iphone').removeClass('iphone');
	      $('#phone_number').addClass('new_phone_number').removeClass('phone_number');
	      $( ".nav li a" ).hover(
					function() {
						$( this ).addClass("new_hover").removeClass("hover");
					}, 
					function() {
						$( this ).removeClass("new_hover");
					}
				);
				$('#logo_BO').attr('src', 'img/logo_BO_green.png');
				$('#logo_BO').addClass('new_logo').removeClass('logo');
				$('#colsm2to1').addClass('col-sm-1').removeClass('col-sm-2');
				$('#colsm4to5').addClass('col-sm-5').removeClass('col-sm-4');
				$( "#btn_hidden" ).removeClass('hidden');
				$('#header').delay(500).fadeIn(400);
				//slider height = viewportHeight-headerHeight
	      var headerHeight = $('.new_header').height();
				var viewportHeight = $(window).height();
				$('.section2 .container').height(viewportHeight-headerHeight);
				$(window).resize(function() {
				  var viewportHeight = $(window).height();
				  $('.section2 .container').height(viewportHeight-headerHeight);
				});          
	      // end slider height						
	   	} // end if(index == 1)
	    //back to the 1st section
	    if(nextIndex == 1){
	    	$('#header').hide();	        	
	      $('#header').removeClass('new_header').addClass('header');
	      $('#header').removeClass('shadow_for_header');
	      $('.nav_li_a').removeClass('new_navigation').addClass('navigation');
	    	$('#phone_icon').removeClass('new_iphone').addClass('iphone');
	    	$('#phone_number').removeClass('new_phone_number').addClass('phone_number');
	      $( ".nav li a" ).hover(
					function() {
						$( this ).addClass("hover").removeClass("new_hover");
					}, 
					function() {
						$( this ).removeClass("hover");
					}
				);
				$('#logo_BO').attr('src', 'img/logo_BO.png');
				$('#logo_BO').removeClass('new_logo').addClass('logo');
				$('#colsm2to1').removeClass('col-sm-1').addClass('col-sm-2');
				$('#colsm4to5').removeClass('col-sm-5').addClass('col-sm-4');
				$( "#btn_hidden" ).addClass('hidden');
				$('#header').delay(650).fadeIn(100);
	    } //end  if(nextIndex == 1)
	    //go to the Slick section (header shadow upgrade)
	    if(nextIndex == 3){
	    	$('#header').addClass('grey_shadow_for_header');
	    } //end  if(nextIndex == 3)	
	    if(index == 3){
	    	$('#header').removeClass('grey_shadow_for_header');
	    } //end  if(index == 3)
		}, // end onLeave

	  afterRender: function(){
		  $('.carousel1').slick({
	      slidesToShow: 4,
	      slidesToScroll: 4,
	      arrows: true,
	      infinite: true,
	      autoplay: false,
	      dots:true
		  });
		  $('.carousel2').slick({
	      slidesToShow: 4,
	      slidesToScroll: 4,
	      arrows: true,
	      infinite: true,
	      autoplay: false,
	      dots:true
		  });
		  $('.carousel3').slick({
	      slidesToShow: 4,
	      slidesToScroll: 1,
	      arrows: true,
	      infinite: true,
	      autoplay: true,
	      dots:false
		  }); // end of Slick

		  $('.attestat-popup-link').magnificPopup({
				type: 'image'
				// other options
			}); 
			$('.btn_form').magnificPopup({
			  type:'inline'
			}); // end of magnificPopup

			// Ajax form sending
			$("#callback").submit(function() {
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize()
				}).done(function() {
					alert("Спасибо за заявку!");
					setTimeout(function() {
						$.magnificPopup.close();	
						$("#callback").trigger("reset");
					}, 1000);
				});
				return false;
			}); // end of ajax form sending

	  } // end afterRender	

	}); // end fullpage

});
