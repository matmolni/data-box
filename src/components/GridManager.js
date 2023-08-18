import {useContext, useEffect, useRef} from 'react'

import 'gridstack/dist/gridstack.min.css'
import 'gridstack/dist/gridstack-extra.min.css'
import {GridStack} from 'gridstack';

import ReactDOM from 'react-dom'

import './DataGrid.css'
import {DataContext, DisplayContext} from "../app/AppContexts";
import DataPanel from "./data-panels/DataPanel";
import {createRoot} from "react-dom/client";

function GridManager() {

    //selected dataset, display range and selected view from context
    const {selectedDataset, setSelectedDataset, displayRange, setDisplayRange} = useContext(DataContext);
    const {selectedView, setSelectedView} = useContext(DisplayContext);

    const gridRef = useRef(null)

    //function that inserts JSX DataPanel components into the grid as Gridstack items
    //called on grid updates, takes the grid ref and the item (DataPanel) to add as arguments
    //the item argument is an object (from the selectedView list) with the following properties: id, x, y, w, h, dataSource
    function insertDataPanel(grid, item) {
        // Create a new div element
        const element = document.createElement('div');
        element.className = "grid-stack-item-content";

        // Using the new root API for React 18
        const root = createRoot(element);

        // Render the React component (DataPanel) into this new div
        root.render(<DataPanel dataSource={item.dataSource} />);

        // set the widget options
        const widgetOptions = {
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h
        };

        // Add the new div (with the React component inside) as a Gridstack item
        const widget = grid.addWidget(element, widgetOptions);
        widget.setAttribute('data-id', item.id);
    }

    //hook that initialises the grid when the component mounts
    useEffect(() => {

        //if the grid has not been initialized, initialize it
        if (!gridRef.current) {
            console.log("initializing grid...")

            gridRef.current = GridStack.init({
                float: true,
                alwaysShowResizeHandle: false,
                minRow: 1,
                column: 6
            }, 'grid-stack');
        }

        //return cleanup function that removes the grid
        return () => {
            gridRef.current.removeAll();
        };

    }, []);

    //hook that updates the grid when the selected view changes
    useEffect(() => {
        console.log(gridRef.current)
        if (gridRef.current && selectedView) {
            console.log("updating grid...");

            gridRef.current.removeAll();
            selectedView.viewLayout.forEach(item => {
                insertDataPanel(gridRef.current, item);
            });
        }
    } , [selectedView]);

    return (
        <div className={"grid-stack"}></div>
    )
}

export default GridManager;