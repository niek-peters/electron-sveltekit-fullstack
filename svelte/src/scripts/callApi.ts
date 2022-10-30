export async function callApi() {
	try {
		const result = await fetch('http://localhost:3000/api/test');
		const json = await result.json();

		return json;
	} catch (error) {
		console.error(error);
	}
}
