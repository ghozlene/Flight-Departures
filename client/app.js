const tableBody = document.getElementById('table-body');

const getFlight = () => {
	fetch('http://localhost:5000/flights')
		.then((res) => res.json())
		.then((flights) => {
			populateTable(flights);
		})
		.catch((err) => console.log(err));
};

getFlight();

const populateTable = (flights) => {
	for (const flight of flights) {
		const tableRow = document.createElement('tr');
		const tableIcon = document.createElement('td');
		tableIcon.textContent = '✈';
		tableRow.append(tableIcon);

		const flightDetails = {
			date: flight.date,
			flight: flight.flightNumber,
			origin: flight.origin.toUpperCase(),
			destination: flight.destiny.toUpperCase(),
		};

		for (const flightDetail in flightDetails) {
			const tableCell = document.createElement('td');
			const word = Array.from(flightDetails[flightDetail]);
			for (const [index, letter] of word.entries()) {
				const lettreElement = document.createElement('div');

				setTimeout(() => {
					lettreElement.className = 'flip';
					lettreElement.textContent = letter;
					tableCell.append(lettreElement);
				}, index * 100);
			}
			tableRow.append(tableCell);
		}
		tableBody.append(tableRow);
	}
};
