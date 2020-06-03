$(function(){
  var winh = $(window).height(),
      upperh = $('.upper-bar').innerHeight(),
      navh   = $('.navbar').innerHeight();
      $('.slider,.carousel-item').height(winh-(upperh+navh));

      $('.our-work ul li').click(function(){
      	$(this).addClass('active').siblings().removeClass('active');
      	if($(this).data('class')==='all'){
      		$('.shuffle-image .col-sm').css('opacity',1);
      	}else{
      		$('.shuffle-image .col-sm').css('opacity',.08);
      		$($(this).data('class')).parent().css('opacity',1);
      	}
      });

});
