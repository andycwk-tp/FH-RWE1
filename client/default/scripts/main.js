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
	var setLocation = function(){
		try {
			$fh.geo({
				act: 'register'				
			}, function(result){
				$('#reportLocationLat').val(result.lat);
				$('#reportLocationLong').val(result.lon);
			}, function(message){
				$('#reportMyLocation').parent().parent().remove();
				console.log(message);
			});
		} catch(err) {
			console.log('geo-location call not supported - disabling geo-location check');
			$('#reportMyLocation').parent().parent().remove();
		}
	};

	setLocation();
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