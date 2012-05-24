$().ready(function(){
	$('form#report-form').on('submit', function(e){
		$fc.act({
			act: 'processReport'
		}, function (){
			alert(args);
		}, function (){
			alert(args);
		}
		);
		e.preventDefault();
	});
})