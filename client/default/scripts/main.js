$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$().ready(function(){
	$('form#report-form').on('submit', function(e){    
    e.preventDefault();
    try {
		var form = $('form#report-form');
		console.log(form.serializeObject());
		$fh.act({
			act: 'processReport',
			req: {formData: form.serializeObject()}
		},function(result){
			console.log(result);
			alert(result.result);
		}, function(msg, err){
			alert(msg + ' ' + err.message + err.error);
		});
		} catch(err) {
			alert('catch: ' + err.message);
		}
	});
});