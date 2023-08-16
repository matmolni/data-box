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
import fetchAvailableData from "../utils/fetchAvailableData";
import generateDataViews from "../utils/generateDataViews";

function App() {

    //selected dataset to display
    const [selectedDataset, setSelectedDataset] = useState(null); //KEEP

    //processed data file
    const [data, setData] = useState({data: null, range: {start: 0, end: 100}});//REMOVE

    //data to display
    const [displayData, setDisplayData] = useState(null);
    const [displayRange, setDisplayRange] = useState({start: 0, end: 0}); //KEEP

    //data view option
    const [dataViews, setDataViews] = useState([]); //REMOVE
    const [selectedView, setSelectedView] = useState([{id: 'item-1', x: 0, y: 0, w: 2, h: 1}, {id: 'item-2', x: 2, y: 0, w: 2, h: 1}]); //REMOVE

    //setup tasks to run on page load
    useEffect(() => {
        //generate data view options and set default
        generateDataViews({setDataViews: setDataViews, setSelectedView: setSelectedView})
    }, []);

    //the layout for the dashboard
    return (
        <div className="dashboard p-3 relative">
            <div className="data-row flex flex-row w-auto">
                <div className="menu-bar w-18rem mr-3">
                    <DataMenu
                        selectedDataset={selectedDataset}
                        setSelectedDataset={setSelectedDataset}
                    ></DataMenu>
                </div>
                <div className="data-grid flex-auto">
                    <DataGrid
                        displayData={displayData}
                        dataView={selectedView}
                    ></DataGrid>
                </div>
            </div>
            <div className="control-row flex flex-row m-3 w-auto absolute bottom-0 left-0 right-0">
                <div className="tl-control w-18rem h-18rem mr-3 flex-shrink-0">
                    <TimelineController
                        data={data}
                        setDisplayRange={setDisplayRange}
                    ></TimelineController>
                </div>
                <div className="timeline flex-auto">
                    <Timeline
                        selectedDataset={selectedDataset}
                        displayRange={displayRange}
                        setDisplayRange={setDisplayRange}
                    ></Timeline>
                </div>
            </div>
        </div>
    );
}

export default App;
