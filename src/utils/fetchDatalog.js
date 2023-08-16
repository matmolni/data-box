async function fetchDatalog(selectedDataset, dataSource) {
    try {

        if (selectedDataset === null) {
            throw new Error('No dataset selected');
        }

        console.log("fetching data for: " + selectedDataset.toString());

        //fetch data from server
        const response = await fetch('http://localhost:8080/data/datalog?datasetId=' + selectedDataset.identifier + '&dataSource=' + dataSource);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();

    } catch (error) {
        console.error('Fetch error: ', error.message);
    }
}

export default fetchDatalog;