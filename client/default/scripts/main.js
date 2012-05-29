$().ready(function(){
	$('form#report-form').on('submit', function(e){    
    e.preventDefault();
    try {
  		$fh.act({
  			act: 'processReport',
        req: {data: {nifty:'test', mode:'cool'})
  		}, function (){
  			alert(arguments);      
  		}, function (){
  			alert('ooops');
  		}
  		);
    } catch (err){
      alert(err.message);
    }
	});
})