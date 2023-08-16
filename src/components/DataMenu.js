import React, {useEffect, useState} from 'react';
import {Divider} from "primereact/divider";
import {Dropdown} from "primereact/dropdown";
import {FileUpload} from "primereact/fileupload";
import fetchAvailableData from "../utils/fetchAvailableData";

function DataMenu({selectedDataset, setSelectedDataset }) {

    //TODO available files should be queried in this component on load or potentially on user input (refresh button)

    //available datasets on server
    const [availableDatasets, setAvailableDatasets] = useState([]);

    //fetch list of available datasets from server on component load OR on user input (refresh button)
    useEffect(() => {
        console.log("fetching data files...");
        fetchAvailableData({setAvailableData: setAvailableDatasets});
    } , []);

    return (
        <div className="h-full w-auto p-3 overflow-y-auto">

            <h1 className="text-left text-2xl font-bold text-color mt-0">Data Menu</h1>
            <h2 className="text-left text-xl font-bold text-color-secondary mt-0">Configure display below:</h2>
            <Dropdown
                placeholder={"Select a data file..."}
                value={selectedDataset}
                onChange={(e) => setSelectedDataset(e.value)}
                onClick={(e) => fetchAvailableData({setAvailableData: setAvailableDatasets})}
                options={availableDatasets}
                optionLabel={"sessionName"}
                className={"w-full"}
            ></Dropdown>
            <p className="text-color-secondary">Select data file to load and display. All available data files are listed in the dropdown.</p>

            <Divider align={"center"}></Divider>

            <h2 className="text-left text-xl font-bold text-color-secondary mt-0">Upload new dataset file:</h2>
            <FileUpload className="w-16" mode="basic" name="dataset-csv" url="http://localhost:8080/upload-csv" accept="text/csv" maxFileSize={1000000}/>
            <p className="text-color-secondary">The dataset file must be the CSV output directly from the vehicle datalogger.</p>

        </div>
    );
}

export default DataMenu;