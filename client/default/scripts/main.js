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
				interval: 0				
			}, function(result){
				$('#reportLocationLat').val(result.lat);
				$('#reportLocationLong').val(result.lon);
			}, function(message){
				//$('#reportMyLocation').parent().parent().remove();
				alert(message);
			});
		} catch(err) {
			alert('geo-location call not supported - disabling geo-location check ('+ err +')');
			//$('#reportMyLocation').parent().parent().remove();
		}
	};

	setLocation();
	$('form#report-form').on('submit', function(e){    
		e.preventDefault();
		setLocation();
		return;
		try {
			var form = $('form#report-form');
			console.log(form.serializeObject());
			$fh.act({
				act: 'processReport',
				req: {formData: form.serializeObject()}
			},function(result){
				alert(result.result);
			}, function(msg, err){
				alert(msg + ' ' + err.message + err.error);
			});
			} catch(err) {
				alert('catch: ' + err.message);
		}
	});
});