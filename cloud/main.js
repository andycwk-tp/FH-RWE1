exports.processReport = function(params, callback){
	try {
		var reportLogEntry = 'New report submitted... ';
		for (var index in param.formData){
			reportLogEntry += index + ':' + param.formData[index] + '  ';
		}
		$fh.log(reportLogEntry);
		return callback(null,{result: reportLogEntry});
	} catch(err) {
		$fh.log(err.message);
		throw "paramater data is wrong";
	}
};
