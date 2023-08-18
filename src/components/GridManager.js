import React, {useContext, useEffect, useRef, useState} from 'react'
import {DataContext, DisplayContext} from "../app/AppContexts";
import DataPanel from "./DataPanel";

import GridLayout, {WidthProvider} from 'react-grid-layout';

//react-grid-layout stylesheets
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(GridLayout);

function GridManager() {

    //selected dataset, display range and selected view from context
    const {selectedDataset, setSelectedDataset, displayRange, setDisplayRange} = useContext(DataContext);
    const {selectedView, setSelectedView} = useContext(DisplayContext);

    // State to manage the grid layout
    const [gridLayout, setGridLayout] = useState([]);

    // useEffect to update gridLayout state whenever selectedView changes
    useEffect(() => {
        if (selectedView && selectedView.viewLayout) {
            setGridLayout(selectedView.viewLayout);
        }
    }, [selectedView]);

    // Render the grid items based on the gridLayout
    const renderGridItems = () => {
        return gridLayout.map(item => (
            <div key={item.id} data-grid={{x: item.x, y: item.y, w: item.w, h: item.h}}>
                <DataPanel chartType={item.chartType}></DataPanel>
            </div>
        ));
    };

    return (
        <div className="flex flex-column h-full p-2">
            <h1 className="flex-none text-left text-2xl font-bold text-color m-0 p-2">Data Menu</h1>
            <div className="flex-1 overflow-y-auto ">
                <div className="h-full, w-full">
                <ResponsiveGridLayout className="layout" cols={6} rowHeight={200} width={300}>
                    {renderGridItems()}
                </ResponsiveGridLayout>
                </div>
            </div>
        </div>
    )
}

export default GridManager;