function processReport(param){
	try {
		var reportLogEntry = 'New report submitted... ';
		for (var index in param.formData){
			reportLogEntry += index + ':' + param.formData[index] + '  ';
		}
		$fh.log(reportLogEntry);
		return {result: reportLogEntry};
	} catch(err) {
		$fh.log(err.message);
		throw "paramater data is wrong";
	}
}
