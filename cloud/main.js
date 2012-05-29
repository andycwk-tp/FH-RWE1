function processReport(param){
  try {
	  $fh.log(param.data.nice);
  } catch(err) {
    $fh.log(err.message);
  }
}
