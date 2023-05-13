//react imports
import React, {useEffect, useState} from 'react';

//stylesheet
import './App.css';

//primereact style sheets
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//dashboard components
import DataMenu from "../components/DataMenu";
import DataGrid from "../components/DataGrid";
import TimelineController from "../components/TimelineController";
import Timeline from "../components/Timeline";

function App() {

    //available data files
    const [availableFiles, setAvailableFiles] = useState({});

    //selected data file
    const [selectedFile, setSelectedFile] = useState({name: null, url: null});

    //processed data file
    const [data, setData] = useState({data: null, range: {start: 0, end: 100}});
    const [displayData, setDisplayData] = useState(null);
    const [displayRange, setDisplayRange] = useState({start: 0, end: 100});

    //parse remote host for available data files when the app first loads
    useEffect(() => {
        console.log("fetching data files...");
/*        fetch("http://localhost:3000/files")
            .then(response => response.json())
            .then(data => {
                setAvailableFiles(data);
            });*/
    }, []);

    //the layout for the dashboard
    return (
        <div className="dashboard p-3 relative">
            <div className="data-row flex flex-row w-auto">
                <div className="menu-bar w-18rem mr-3">
                    <DataMenu
                        availableFiles={availableFiles}
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                        data={data}
                        setData={setData}
                        setDisplayData={setDisplayData}
                        setDisplayRange={setDisplayRange}
                    ></DataMenu>
                </div>
                <div className="data-grid flex-auto">
                    <DataGrid
                        displayData={displayData}
                    ></DataGrid>
                </div>
            </div>
            <div className="control-row flex flex-row m-3 w-auto absolute bottom-0 left-0 right-0">
                <div className="tl-control w-18rem h-18rem mr-3">
                    <TimelineController
                        data={data}
                        setDisplayRange={setDisplayRange}
                    ></TimelineController>
                </div>
                <div className="timeline flex-auto">
                    <Timeline
                        displayData={displayData}
                        displayRange={displayRange}
                        setDisplayRange={setDisplayRange}
                    ></Timeline>
                </div>
            </div>
        </div>
    );
}

export default App;
