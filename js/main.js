$(function(){
    // FastClick.attach(document.body);
    /*
    //禁止橡皮筋
	function stopScrolling( touchEvent ) { 
		touchEvent.preventDefault(); 
	} 
	document.addEventListener( 'touchstart' , stopScrolling , false ); 
	document.addEventListener( 'touchmove' , stopScrolling , false );
	*/

	setTimeout(function(){
		$('#lb')
			.removeClass('hidden')
			.click(function(event) {
				$('#core')
					.removeClass('hidden')
			});
	}, 2000)
})