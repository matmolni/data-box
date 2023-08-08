import React from 'react';
import {SlideMenu} from "primereact/slidemenu";
import {Divider} from "primereact/divider";
import {Dropdown} from "primereact/dropdown";
import {parseCSV} from "../utils/parseCSV";
import {FileUpload} from "primereact/fileupload";

function DataMenu({ availableFiles, selectedFile, setSelectedFile, data, setData, setDisplayData, setDisplayRange }) {

    //TODO available files should be queried in this component on load or potentially on user input (refresh button)

    //handle file selection using the CascadeSelect component
    const handleFileSelect = (e) => {
        if (e.value !== null) {
            const fileURL = e.value;

            setSelectedFile({url: fileURL});

            parseCSV({
                fileURL: fileURL,
                setData: setData,
                setDisplayData: setDisplayData,
                setDisplayRange: setDisplayRange
            });
        }
    }

    return (
        <div className="h-full w-auto p-3 overflow-y-auto">
            <h1 className="text-left text-2xl font-bold text-color mt-0">Data Menu</h1>
            <h2 className="text-left text-xl font-bold text-color-secondary mt-0">Configure display below:</h2>
            <Dropdown
                placeholder={"Select a data file..."}
                value={selectedFile.name}
                onChange={handleFileSelect}
                options={availableFiles}
                optionLabel={"fileName"}
                optionValue={"fileURL"}
                className={"w-full"}
            ></Dropdown>
            <p className="text-color-secondary">Select data file to load and display. All available data files are listed in the dropdown.</p>
            <Divider align={"center"}></Divider>
            <h2 className="text-left text-xl font-bold text-color-secondary mt-0">Upload new dataset file:</h2>
            <FileUpload className="w-16" mode="basic" name="dataset-csv" url="/api/upload" accept="text/csv" maxFileSize={1000000}/>
            <p className="text-color-secondary">The dataset file must be the CSV output directly from the vehicle datalogger.</p>
        </div>
    );
}

export default DataMenu;