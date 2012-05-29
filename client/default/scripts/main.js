$().ready(function(){
	$('form#report-form').on('submit', function(e){    
    e.preventDefault();
    try {
      $fh.act({
        act: 'processReport',
        req: {data: {nice:'test'}}
      },function(){
        alert('pass');
      }, function(msg, err){
        alert(msg + ' ' + err.message);
      });
    } catch(err) {
        alert('catch: ' + err.message);
    }
  });
});