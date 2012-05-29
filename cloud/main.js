function processReport(param){
  try {
	  $fh.log(param.data);
  } catch(err) {
    $fh.log(err.message);
    throw "paramater data is wrong";
  }
}
