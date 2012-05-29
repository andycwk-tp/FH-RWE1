function processReport(param){
  try {
	  $fh.log(param.formData.firstName, param.formData.lastName, param.formData.emailAddress);
  } catch(err) {
    $fh.log(err.message);
    throw "paramater data is wrong";
  }
}
