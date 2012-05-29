$().ready(function(){
	$('form#report-form').on('submit', function(e){    
    e.preventDefault();
    try {
      $fh.act({
        act: 'processReport',
        req: {data: {nice:'test'}}
      },function(){
        alert('pass');
      }, function(){
        alert('fail');
      });
    } catch(err) {
        alert(err.message);
    }
  });
});