$().ready(function(){
	$('form#report-form').on('submit', function(e){    
    e.preventDefault();
    try {
		var form = $('form#report-form');
		alert(form.firstName);
		$fh.act({
			act: 'processReport',
			req: {
				formData: {
					firstName: form['firstName']
				}}
		},function(){
			alert('pass');
		}, function(msg, err){
			alert(msg + ' ' + err.message + err.error);
		});
		} catch(err) {
			alert('catch: ' + err.message);
		}
	});
});