var os = require('os');
var uptime = os.uptime();

function changeTime() {
	var hours = Math.floor(uptime / 3600);
	var minutes = Math.floor((uptime - (hours * 3600)) / 60);
	var second = uptime - (hours * 3600) - (minutes * 60);

	if (uptime < 60) {
		console.log('Uptime is: ', second);
	}
	else if(uptime >= 60) {
		console.log('Uptime is: ', minutes, 'min ' + second, 'sec');
	}
	else {
		console.log('Uptime is: ', hours, 'h ' + minutes, ' min ' + second, 'sec');
	}
}

exports.print = changeTime;