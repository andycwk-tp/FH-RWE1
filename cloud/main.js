function processReport(param){
  try {
	  $fh.log(param.data);
  } catch(err) {
    $fh.log(err);
  }
}
