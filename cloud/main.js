require('util');

exports.processReport = function(params, callback){
	try {
		var reportLogEntry = 'New report submitted... ';
		for (var index in params.formData){
			reportLogEntry += index + ':' + params.formData[index] + '  ';
		}
		$fh.log(reportLogEntry);
		return callback(null,{result: reportLogEntry});
	} catch(err) {
		$fh.log(err.message);
		throw "paramater data is wrong";
	}
};
