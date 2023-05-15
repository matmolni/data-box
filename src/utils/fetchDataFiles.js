async function fetchData({setAvailableFiles}) {
    const response = await fetch("http://localhost:8080/files");
    const data = await response.json();

    function createJSON(files, constant) {
        let jsonArray = files.map(file => {
            let fileName = file.split('.')[0];
            let fileURL = constant + file;
            return { fileName, fileURL };
        });
        return jsonArray;
    }

    const files = createJSON(data, "http://localhost:8080/resources/");

    setAvailableFiles(files);
    console.log(files)
}

export default fetchData;