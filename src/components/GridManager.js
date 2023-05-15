import  { useState, useEffect, createRef, useRef } from 'react'

import 'gridstack/dist/gridstack.min.css'
import 'gridstack/dist/gridstack-extra.min.css'
import { GridStack } from 'gridstack';

import './DataGrid.css'
import GenericPanel from "./data-panels/GenericPanel";

function GridManager({ displayData, initialLayout }) {
    const gridRef = useRef(null)

    //hook that renders the grid when the component mounts and when the initialLayout prop changes
    useEffect(() => {
        if (!gridRef.current) {
            gridRef.current = GridStack.init({
                float: true,
                alwaysShowResizeHandle: false,
                minRow: 1,
                column: 6
            }, '.datagrid');
        }

        const grid = gridRef.current;

        //loads the layout specified in the initialLayout prop, removes all previous items
        grid.load(initialLayout, true);

    }, [initialLayout]);

    return (
        <div className={`grid-stack datagrid`}></div>
    )
}


export default GridManager;