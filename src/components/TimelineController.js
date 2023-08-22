import React, {useContext} from 'react';
import {Button} from "primereact/button";
import {DataContext, DisplayContext} from "../app/AppContexts";

function TimelineController() {

    //display range state from context
    const {selectedDataset, setDisplayRange} = useContext(DataContext);

    //handler function for reset view button - resets the display range to the full range of the data
    function resetView() {
        setDisplayRange({start: 0, end: selectedDataset.duration});
    }

    return (
        <div className="h-full w-auto p-3">
            <Button label="Reset View" icon={"pi pi-history"} severity={"danger"} onClick={resetView}></Button>
        </div>
    );
}

export default TimelineController;