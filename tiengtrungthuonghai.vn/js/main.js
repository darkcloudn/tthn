// COPY TO CLIPBOARD
// Attempts to use .execCommand('copy') on a created text field
// Falls back to a selectable alert if not supported
// Attempts to display status in Bootstrap tooltip
// ------------------------------------------------------------------------------
(function($){
	'use strict'

	jQuery(document).ready( function () {                              
        $("#lichKhaiGiang_click, .lichKhaiGiang_broad").hover(function(){
			$( ".lichKhaiGiang_broad" ).toggleClass( "active" )
		});
		$("#dangKyHocThu_click").click(function(){
			$( ".dangKyHocThu_broad" ).toggleClass( "active" )
		});
		$('.multiple-items').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
				  breakpoint: 1500,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
		// VIDEO 2
		$('.ytvideo[data-video]').one('click', function() {

			var $this = $(this);
			var width = $this.attr("width");
			var height = $this.attr("height");
			
			$this.html('<iframe src="https://www.youtube.com/embed/' + $this.data("video") + '?autoplay=1"></iframe>');
		});

		$(".sidebar_list a").click(function() {
			var linkID = $(this).attr('id');
			$("body,html").animate(
			  {
				scrollTop: $("#check").offset().top
			  },
			  800 //speed
			);
		});
		
		$('.wp-seach-boxing').click(function(event) {
			console.log('ssssss');
			$('#wp-seach-boxing-input').toggle(300);
		});
		
	});
	
	// $("p").click(function(){
	// 	alert("The paragraph was clicked.");
	//   }); 
	// //Click Lich khai giang

	// $('#tesst').click(function() {
	// 	console.log("Chay");
	// 	alert('àggg');
	// })

	// $( "body" ).on('click','.lichKhaiGiang_list',function() {
	// 	console.log("Chay");
	// 	alert('àggg');
	//   });

	// function openDangKy() {
	// 	var element = document.getElementById("dangKyHocThu_click");
	// 	element.classList.toggle("active");

		
	// 	console.log("Chay");
	// 	return true;
	// } 

})(jQuery);