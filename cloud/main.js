function processReport(param){
  try {
	for (var index in param){
		$fh.log(param[index]);
	}
	
  } catch(err) {
    $fh.log(err.message);
    throw "paramater data is wrong";
  }
}
