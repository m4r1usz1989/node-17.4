var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Wuitting app!\n');
				break;
			case '/version':
				process.stdout.write(process.version + '\n');
				break;
			case '/lang':
				process.stdout.write(process.env.LANG + '\n');
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});