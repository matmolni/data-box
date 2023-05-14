//react imports
import React, {useEffect, useState} from 'react';

//stylesheet
import './App.css';

//primereact style sheets
import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//dashboard components
import DataMenu from "../components/DataMenu";
import DataGrid from "../components/DataGrid";
import TimelineController from "../components/TimelineController";
import Timeline from "../components/Timeline";

function App() {

    //available data files on server
    const [availableFiles, setAvailableFiles] = useState({});

    //selected data file (from server)
    const [selectedFile, setSelectedFile] = useState({url: null});

    //processed data file
    const [data, setData] = useState({data: null, range: {start: 0, end: 100}});

    //section of data to display
    const [displayData, setDisplayData] = useState(null);
    const [displayRange, setDisplayRange] = useState({start: 0, end: 100});

    //data view option
    const [dataView, setDataView] = useState([{ id: 'item-1' }, { id: 'item-2' }]);

    //parse remote host for available data files when the app first loads
    useEffect(() => {
        console.log("fetching data files...");
        async function fetchData() {
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

        fetchData();
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
                        dataView={dataView}
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
