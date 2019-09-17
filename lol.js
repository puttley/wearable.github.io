let port;
document.addEventListener('DOMContentLoaded', () => {
	let connectButton = document.querySelector("#connect");
//	let device = document.querySelector('#device');
  let device = document.querySelector('#device');
	let text = document.querySelector('#text');
	let main = document.querySelector('#main');
	let form = document.querySelector('#form');
	let timer = null;

	form.addEventListener('submit', function (event) {
		const textInput = (text.value + '   \n').toUpperCase();
		port.send(new TextEncoder("utf-8").encode(textInput));
		event.preventDefault();
	});

	connectButton.addEventListener('click', function () {
		if (port) {
			port.disconnect();
			connectButton.textContent = 'Connect Cube';
			device.textContent = '';
			port = null;
		} else {
			serial.requestPort().then(selectedPort => {
				port = selectedPort;
				connect();
			}).catch(error => {
				device.textContent = error;
			});
		}
	});

	serial.getPorts().then(ports => {
		if (ports.length == 0) {
			device.textContent = 'Code Cube not Found...';
			main.classList.add('error');
		} else {
			device.textContent = 'Connecting...';
			port = ports[0];
			connect();
		}
	});

	function connect() {
			port.connect().then(() => {
			device.textContent = '';
			connectButton.innerHTML = '<b>&times;</b> Disconnect';

			device.innerHTML = `&#x2714; Connected with ${port.device_.productName}.`;
			device.textContent = 'Connected to Code Cube';
			main.classList.remove('error');

			port.onReceive = data => {
				let textDecoder = new TextDecoder();
	//			text.value = textDecoder.decode(data).trim();
				var serial = textDecoder.decode(data).trim();
				console.log(serial);
				clearInterval(timer);
			};
			port.onReceiveError = error => {
				device.textContent = error;
				main.classList.add('error');
			};

	//  Bottom three lines disabled by Paul - disables timer from pinging serial every 200ms
			timer = setInterval(() => {
				port.send(new TextEncoder("utf-8").encode("\n"));
			}, 1000);

		}, error => {
			device.textContent = error;
			main.classList.add('error');
		});
	}
});
