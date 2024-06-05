// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
		{
		  "id": 3,
		  "quantity": 4
		}
	  ]
}

test('Status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200);
});

test('Response body should contain....', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["Everything You Need"]["Pepsi Soft Drink"]).toBe(false);
	expect(actualResponseBody["Food City"]["Pepsi Soft Drink"]).toBe(true);
	expect(actualResponseBody["Big World"]["Pepsi Soft Drink"]).toBe(true);
	expect(actualResponseBody["Fresh Food"]["Pepsi Soft Drink"]).toBe(true);
	
});
