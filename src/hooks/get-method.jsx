export const GetMethod = async (api, setData) => {
	try {
		const response = await fetch(api); // API endpoint URL
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const jsonData = await response.json();
		setData(jsonData);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};
