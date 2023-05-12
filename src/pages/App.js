//react imports
import React, {useState} from 'react';

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

    const [data, setData] = useState({data: null, range: {start: 0, end: 100}});
    const [displayData, setDisplayData] = useState(null);
    const [displayRange, setDisplayRange] = useState({start: 0, end: 100});

    return (
        <div className="dashboard p-3 relative">
            <div className="data-row flex flex-row w-auto">
                <div className="menu-bar w-18rem mr-3">
                    <DataMenu></DataMenu>
                </div>
                <div className="data-grid flex-auto">
                    <DataGrid></DataGrid>
                </div>
            </div>
            <div className="control-row flex flex-row m-3 w-auto absolute bottom-0 left-0 right-0">
                <div className="tl-control w-18rem h-18rem mr-3">
                    <TimelineController data={data} setDisplayRange={setDisplayRange}></TimelineController>
                </div>
                <div className="timeline flex-auto">
                    <Timeline displayData={displayData} displayRange={displayRange} setDisplayRange={setDisplayRange}></Timeline>
                </div>
            </div>
        </div>
    );
}

export default App;
