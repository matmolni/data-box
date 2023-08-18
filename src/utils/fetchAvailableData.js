async function fetchAvailableData({setAvailableData}) {

    try {
        const response = await fetch('http://localhost:8080/data/dataset/all');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const availableDatasets = await response.json();
        // Now, data contains the parsed JSON from the server
        console.log(availableDatasets);

        //save available datasets to state
        setAvailableData(availableDatasets);

    } catch (error) {
        console.error('Fetch error: ', error.message);
    }
}

export default fetchAvailableData;