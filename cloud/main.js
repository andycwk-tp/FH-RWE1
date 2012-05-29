function processReport(param){
  try {
	for (var index in param.formData){
		$fh.log(index + ':' + param.formData[index]);
	}
	
  } catch(err) {
    $fh.log(err.message);
    throw "paramater data is wrong";
  }
}
