$().ready(function(){
	$('form#report-form').on('submit', function(e){    
    e.preventDefault();
		$fh.act({
			act: 'processReport'
		}, function (){
			alert(arguments);      
		}, function (){
			alert(args);
		}
		);
		e.preventDefault();
	});
})