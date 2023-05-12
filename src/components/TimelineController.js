import {Button} from "primereact/button";

function TimelineController({data, setDisplayRange}) {

    //handler function for reset view button - resets the display range to the full range of the data
    function resetView() {
        setDisplayRange({start: data.range.start, end: data.range.end});
    }

    return (
        <div className="h-full w-auto">
            <Button label="Reset View" icon={"pi pi-history"} severity={"danger"} className="m-3" onClick={resetView}></Button>
        </div>
    );
}

export default TimelineController;