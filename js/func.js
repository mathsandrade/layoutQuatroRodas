$(function(){
	$('.linkVeiculo').hover(function(){				
	var veiculo = $(this).attr('id');

	if(veiculo == 'tudo')
	{
		$('.todosCarros').fadeIn('slow');
		//$('.linkTeste').addClass('open');
	}else{
		$('.todosCarros').fadeOut('slow');
	}	//alert(veiculo);
	});
});