import React from 'react';
import {SlideMenu} from "primereact/slidemenu";
import {Divider} from "primereact/divider";
import {CascadeSelect} from "primereact/cascadeselect";
import {parseCSV} from "../utils/parseCSV";

function DataMenu({ availableFiles, selectedFile, setSelectedFile, data, setData, setDisplayData, setDisplayRange }) {

    //handle file selection using the CascadeSelect component
    const handleFileSelect = (e) => {
        if (e.value !== null) {
            const fileName = e.value.name;
            const fileURL = e.value.url;

            setSelectedFile({name: fileName, url: fileURL});

            parseCSV({
                fileURL: fileURL,
                setData: setData,
                setDisplayData: setDisplayData,
                setDisplayRange: setDisplayRange
            });
        }
    }

    return (
        <div className="h-full w-auto p-3">
            <CascadeSelect
                placeholder={"Select a data file..."}
                value={selectedFile.name}
                onChange={handleFileSelect}
                options={availableFiles}
                className={"w-full"}
            ></CascadeSelect>
        </div>
    );
}

export default DataMenu;