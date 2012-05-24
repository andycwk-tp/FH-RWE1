$().ready(function(){
	$('form#report-form').on('submit', function(e){
		$fc.act({
			act: 'processRequest'
		}, function (){
			alert(arguments);
		}, function (){
			alert(arguments);
		}
		);
		e.preventDefault();
	});
})