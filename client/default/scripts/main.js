alert('load');
$().ready(function(){
  alert('init');
	$('form#report-form').on('submit', function(e){
    alert('send');
    e.preventDefault();
		$fh.act({
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