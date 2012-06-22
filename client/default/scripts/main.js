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
				//alert(message);
			});
		} catch(err) {
			alert('geo-location call not supported - disabling geo-location check ('+ err +')');
			//$('#reportMyLocation').parent().parent().remove();
		}
	};

	//setTimeout(function(){setLocation();}, 50);
	$('form#report-form').on('submit', function(e){    
		e.preventDefault();
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
	
	$('#reportMyLocation').on('click', function(e){
		var isChecked = $(this).attr('checked') === 'checked';
		if (isChecked) {
			alert('set');
			setLocation();
		} else {
			alert('clear');
			$('#reportLocationLat').val('');
			$('#reportLocationLong').val('');
		}
	});
	
	$('#takePhoto, #useGallery').on('click', function(){
		var photoFrame = $('#reportPhoto');
		var oldSource = photoFrame.attr('src');
		var oldBase64Data = $('#reportPhoto').val();
		setTimeout(function(){
			photoFrame.attr('src', 'graphics/progress.gif');
		}, 50);
		var source = this.id === 'takePhoto'
			? 'camera'
			: 'photo';		
		try {
			$fh.cam({
				act: 'picture',
				source: source,
				uri: false
			}, function(result){
				var photoData = 'data:image/' + result.format + ';base64,' + result.b64;
				$('#reportPhotoData').val(result.b64);
				$('#reportPhoto').attr('src', photoData);
			}, function(msg, err){
				photoFrame.attr('src', oldSource);	
				$('#reportPhoto').val(oldBase64Data);
				alert('fault:  msg' + msg);
			});
		} catch(err) {
			photoFrame.attr('src', oldSource);
			$('#reportPhoto').val(oldBase64Data);
			alert('cammera not supported - photo options ('+ err +')');			
		}
	});
});