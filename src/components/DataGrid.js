import React from 'react';
import GridManager from "./GridManager";

function DataGrid() {

    return (
        <div className="h-full w-auto p-3">
            <h1 className="text-left text-2xl font-bold text-color mt-0">Data Grid</h1>
            <div className="grid-container w-auto overflow-y-auto">
                <GridManager></GridManager>
            </div>
        </div>
    );
}

export default DataGrid;