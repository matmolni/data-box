import logo from '../assets/logo.svg';
import './App.css';

//primereact style sheets
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//primereact components
import {Skeleton} from "primereact/skeleton";

import DataMenu from "../components/DataMenu";
import DataGrid from "../components/DataGrid";
import TimelineController from "../components/TimelineController";
import Timeline from "../components/Timeline";


function App() {
    return (
        <div className="dashboard p-3 relative">
            <div className="data-row flex flex-row w-auto">
                <div className="menu-bar w-18rem mr-3">
                    <DataMenu></DataMenu>
                </div>
                <div className="data-grid flex-auto">
                    <Skeleton width="100%" height="100%"></Skeleton>
                </div>
            </div>
            <div className="control-row flex flex-row m-3 w-auto absolute bottom-0 left-0 right-0">
                <div className="tl-control w-18rem mr-3">
                    <Skeleton width="100%" height="18rem"></Skeleton>
                </div>
                <div className="timeline flex-auto">
                    <Skeleton width="100%" height="18rem"></Skeleton>
                </div>
            </div>
        </div>
    );
}

export default App;
